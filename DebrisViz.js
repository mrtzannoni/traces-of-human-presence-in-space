//BASIC GRAPH INFORMATION SO I CAN USE IT MORE TIME WITHOUT WRITING IT TWICE

export class DebrisViz {
  constructor(containerSelector, options) {
    //PARAMETERS POSITION
    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;
    this.margin = { top: 50, right: 50, bottom: 50, left: 50 };

    this.orbitTicks = [2000, 20000, 35786];
    this.orbitLabels = { 2000: "LEO", 20000: "MEO", 35786: "GEO" };

    //BOOLEANS
    if (options.showAxis !== undefined) {
      this.showAxis = options.showAxis;
    } else {
      this.showAxis = true;
    }

    this.activeFilter = {
      type: "all",
      state: "all",
      orbit: "all",
    };

    // CONTAINERS
    const baseSelection = d3.select(containerSelector);

    this.container = baseSelection
      .append("div")
      .style("position", "relative")
      .style("width", "100%")
      .style("height", "100%");

    this.canvasSelection = this.container
      .append("canvas")
      .style("position", "absolute")
      .style("width", "100%")
      .style("height", "100%");

    this.canvas = this.canvasSelection.node();
    this.ctx = this.canvas.getContext("2d");

    const rect = baseSelection.node().getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.svg = this.container
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .style("position", "absolute")
      .style("pointer-events", "none");

    //DATA
    this.data = [];
    this.filteredData = [];
  }

  //FUNCTIONS

  //LOAD DATA
  //An async function declaration creates an AsyncFunction object. Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.
  //Async functions can contain zero or more await expressions. Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression. Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.

  async loadData(path) {
    const originalData = await d3.csv(path);

    originalData.forEach(function (d) {
      if (d.ExpandedStatus === "In solar orbit") {
        d.Mean_Altitude = 45000000;
        d.p = 0;
        d.a = 0;
      } else {
        d.Mean_Altitude = +d.Mean_Altitude;
        d.p = +d.Perigee;
        d.a = +d.Apogee;
      }
      const year = d.Launch_Date.substring(0, 4);
      const month = d.Launch_Date.substring(4, 6) - 1;
      const day = d.Launch_Date.substring(6, 8);
      d.realDate = new Date(year, month, day);

      d.Mean_Altitude = +d.Mean_Altitude;
      d.p = +d.Perigee;
      d.a = +d.Apogee;
      d.inc = +d.Inc;
    });

    this.data = originalData;
    this.applyFilters();
  }

  //FILTERS
  setFilter(category, value) {
    this.activeFilter[category] = value;
    this.applyFilters();
  }
  applyFilters() {
    this.filteredData = this.data.filter((d) => {
      const baseCondition =
        d.EStatus !== "Decayed/Reentered" &&
        d.LDate != "-" &&
        (d.Mean_Altitude > 0 || d.ExpandedStatus === "In solar orbit") &&
        d.realDate.getFullYear() > 1950;

      const filterType =
        this.activeFilter.type === "all" ||
        (this.activeFilter.type === "P" && d.Type.startsWith("P")) ||
        (this.activeFilter.type === "R" && d.Type.startsWith("R")) ||
        (this.activeFilter.type === "D" && d.Type.startsWith("D"));

      const filterState =
        this.activeFilter.state === "all" ||
        (this.activeFilter.state === "RU-SU" &&
          (d.State === "RU" || d.State === "SU")) ||
        (this.activeFilter.state ===
          "AT-B-CH-CZ-D-DK-EE-E-FI-FR-UK-GR-HU-IE-I-L-NO-PL-PT-RO-S-SI" &&
          [
            "AT",
            "B",
            "CH",
            "CZ",
            "D",
            "DK",
            "EE",
            "E",
            "FI",
            "FR",
            "UK",
            "GR",
            "HU",
            "IE",
            "I",
            "L",
            "NO",
            "PL",
            "PT",
            "RO",
            "S",
            "SI",
          ].includes(d.State)) ||
        d.State === this.activeFilter.state;

      const filterOrbit =
        this.activeFilter.orbit === "all" ||
        (this.activeFilter.orbit === "In Earth orbit" &&
          d.ExpandedStatus === "In Earth orbit") ||
        (this.activeFilter.orbit === "In solar orbit" &&
          d.ExpandedStatus === "In solar orbit") ||
        (this.activeFilter.orbit === "Lost" && d.ExpandedStatus === "Lost");

      return baseCondition && filterType && filterState && filterOrbit;
    });

    this.scaleAxis();
    this.svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", this.margin.left - 40)
      .attr("x", -(this.height / 2))
      .attr("text-anchor", "middle")
      .attr("fill", "#888")
      .style("font-size", "10px")
      .text("ALTITUDE ABOVE EARTH (KM)");
        this.updateQuadtree();
        this.render();
      }

  //RENDER
  //In the context of JavaScript, rendering involves manipulating the Document Object Model (DOM) to update the content of a web page dynamically.
  //It calls an external drawing function

  render(altX, altY) {
    const xS = altX || this.xScale;
    const yS = altY || this.yScale;
    const solarY = this.margin.top + 20;

    this.tree = d3
      .quadtree()
      .x((d) => xS(d.realDate))
      .y((d) =>
        d.ExpandedStatus === "In solar orbit" ? solarY : yS(d.Mean_Altitude),
      )
      .addAll(this.filteredData);

    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.save();

    if (this.drawCallback) {
      this.drawCallback(this.ctx, this.filteredData, xS, yS);
    }

    this.ctx.restore();
  }
  setDrawLogic(fn) {
    this.drawCallback = fn;
  }

  //SCALES AND AXIS
  scaleAxis() {
    if (this.showAxis) {
      const solarLabel = this.svg
        .append("text")
        .attr("y", this.margin.top + 18)
        .attr("text-anchor", "end")
        .attr("fill", "white")
        .style("font-size", "10px");

      solarLabel
        .append("tspan")
        .attr("x", this.margin.left - 5)
        .attr("dy", "0")
        .text("SOLAR");

      solarLabel
        .append("tspan")
        .attr("x", this.margin.left - 5)
        .attr("dy", "1.2em")
        .text("ORBIT");

      this.svg.selectAll(".axis").remove();
      this.xScale = d3
        .scaleTime()
        /* .domain(
          d3.extent(this.filteredData, function (d) {
            return d.realDate;
          }),
        ) */
        .domain([new Date(1957, 0, 1), new Date(2026, 1, 31)])
        .range([this.margin.left, this.width - this.margin.right]);

      this.yScale = d3
        .scaleLog()
        .domain([
          100,
          d3.max(this.filteredData, function (d) {
            return d.Mean_Altitude;
          }),
        ])
        .range([this.height - this.margin.bottom, this.margin.top + 50])
        .nice();
      //.clamp(true);
      // d3.max(this.filteredData, function(d){return d.Mean_Altitude})

      //AXES
      this.xAxis = d3.axisBottom(this.xScale).ticks(10);

      this.gx = this.svg
        .append("g")
        .attr("class", "axis x-axis")
        .attr("transform", `translate(0, ${this.height - this.margin.bottom})`)
        .call(this.xAxis);

      this.yAxis = d3.axisLeft(this.yScale).ticks(5, "~s");

      this.gy = this.svg
        .append("g")
        .attr("class", "axis y-axis")
        .attr("transform", `translate(${this.margin.left}, 0)`)
        .call(this.yAxis);

      this.orbitAxis = d3
        .axisLeft(this.yScale)
        .tickValues(this.orbitTicks)
        .tickFormat((d) => this.orbitLabels[d]);

      this.gOrbits = this.svg
        .append("g")
        .attr("class", "axis orbit-axis")
        .attr("transform", `translate(${this.margin.left}, 0)`)
        .call(this.orbitAxis);
      this.styleOrbitAxis();
    } else {
      this.svg.selectAll(".axis").remove();
      this.xScale = d3
        .scaleTime()
        .domain(
          d3.extent(this.filteredData, function (d) {
            return d.realDate;
          }),
        )
        .range([this.margin.left, this.width - this.margin.right])
        .nice();

      this.yScale = d3
        .scaleLog()
        .domain([
          100,
          d3.max(this.filteredData, function (d) {
            return d.Mean_Altitude;
          }),
        ])
        .range([this.height - this.margin.bottom, this.margin.top])
        .nice();
    }
  }

  styleOrbitAxis() {
    this.gOrbits
      .selectAll(".tick text")
      .style("fill", "white")
      .style("font-size", "10px")
      .attr("x", -30)
      .attr("text-anchor", "start");

    this.gOrbits
      .selectAll(".tick line")
      .classed("orbit-line", true)
      .attr("x2", this.width - this.margin.right - this.margin.left)
      .style("stroke", "var(--accent-color)")
      .style("stroke-dasharray", "4,4")
      .style("opacity", 0.5);

    this.gOrbits.select(".domain").remove();
  }
  //QUADTREE
  updateQuadtree() {
    const solarLaneY = this.margin.top + 20;

    this.tree = d3
      .quadtree()
      .x((d) => this.xScale(d.realDate))
      .y((d) => {
        if (d.ExpandedStatus === "In solar orbit") {
          return solarLaneY;
        }
        return this.yScale(d.Mean_Altitude);
      })
      .addAll(this.filteredData);
  }

  //ZOOM
  iZoom() {
    if (this.showAxis) {
      this.zoom = d3
        .zoom()
        .scaleExtent([1, 50])
        .translateExtent([
          [0, 0],
          [this.width, this.height],
        ])
        .on("zoom", (event) => {
          const currentTransform = event.transform;
          const newYScale = currentTransform.rescaleY(this.yScale);
          const newXScale = currentTransform.rescaleX(this.xScale);

          this.gy.call(this.yAxis.scale(newYScale));

          this.gOrbits.call(this.orbitAxis.scale(newYScale));

          this.styleOrbitAxis();

          this.gOrbits.selectAll(".tick").style("opacity", (d) => {
            const py = newYScale(d);
            return py < this.margin.top || py > this.height - this.margin.bottom
              ? 0
              : 1;
          });

          this.gx.call(this.xAxis.scale(newXScale));
          this.render(newXScale, newYScale);
        });

      this.canvasSelection.call(this.zoom);
    }
  }

  updateStateStats() {
    const total = this.filteredData.length;
    if (total === 0) return;

    const esaMembers = [
      "AT",
      "BE",
      "CH",
      "CZ",
      "DE",
      "DK",
      "EE",
      "ES",
      "FI",
      "FR",
      "GB",
      "GR",
      "HU",
      "IE",
      "IT",
      "LU",
      "NL",
      "NO",
      "PL",
      "PT",
      "RO",
      "SE",
      "SI",
      "I-ESA",
    ];
    const targets = ["US", "RU-SU", "CN", "ESA"];

    const stateCounts = d3.rollup(
      this.filteredData,
      (v) => v.length,
      (d) => {
        if (d.State === "RU" || d.State === "SU") return "RU-SU";
        if (esaMembers.includes(d.State)) return "ESA";
        return d.State;
      },
    );

    const list = d3.select("#stats");
    list.html(
      '<div class="stats-title" style="font-family: Monument; font-size: 14px; margin-bottom: 10px;">KEY SPACE POWERS</div>',
    );

    const labelMap = {
      US: "USA",
      "RU-SU": "Russia/USSR",
      CN: "China",
      ESA: "ESA (Europe)",
    };

    targets.forEach((target) => {
      const count = stateCounts.get(target) || 0;
      const percentage = ((count / total) * 100).toFixed(1);

      list
        .append("div")
        .attr("class", "stat-row")
        .style("display", "flex")
        .style("justify-content", "space-between")
        .style("font-size", "12px")
        .html(
          `<span>${labelMap[target]}</span> <span>${count.toLocaleString("it-IT")} (${percentage}%)</span>`,
        );
    });
  }

}
