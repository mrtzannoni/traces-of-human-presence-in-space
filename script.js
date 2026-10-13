//Earth svg
const earthSvg = new Image();
const earthSvgData = `<?xml version="1.0" encoding="UTF-8"?>
      <svg version="1.1" viewBox="0 0 625.34 579.93" xmlns="http://www.w3.org/2000/svg">
        <path d="M317.35,30.61c-144.65,0-261.91,116.12-261.91,259.35s117.26,259.35,261.91,259.35,261.91-116.12,261.91-259.35S462,30.61,317.35,30.61ZM444.15,218.34c16.26-9.72,1.12,11.44,5.9,13.4,9.45,3.93,11.5,11.3,18.43,20.21,15.94,8.38,1.82,21.94-11.29,14.79h0c1.77-18.82,3.41-13.16-12.63-23.1-6.16-4.78-11.72-20.13-.4-25.3ZM419.53,265.3c-16.05-9.66-36.79,12.64-47.28-.02,4.34-6.89,6.77-16.04,5.87-21.57h0c2.72-8.54,2.76-3.18,6.03-2.61,13.27-1.75.36,7.15,8.54,13.42,3.65-19.61,46.49-1.54,26.84,10.78ZM76.62,380.71c-20.26-47.7-20.79-114.97-4.94-165.64,5.46-17.44,10.09-33.07,24.17-43.36,4.91-6.54,9.83-14.46,12.88-13,19.51-3.46-5.63,8.73,5.15,8.64,11.51,2.12,4.25-8.62,10.16-16.68,4.78,6.64,5.9-4.17,7.54.08,21.52-.97-16.18,8.87-3.8,20.26,2.4,8.14,4.9-14.98,13.88-17.76,13.68-8.56,11.68-26.59,25.39-35.71,20.63-16.8-12.9,5.72-1.68-6.25,6.95-3.63,9.19-8.34,15.18-13.81,2.71-16.51-24.25,15.01-29.42,12.22-21.83,16.65.32-2.61,9.64-11.99,5.31-12.36,46.61-29.64,21.3-8.84,9.58-2.39,21.71-12.34,30.88-10.15-10.88,5.76-8.33,6.94-19.52,11.77-6.78-6.16-3.52,4.51-12.14,9.1-12.01,12.62,5.64,9,11.31-1.31,18-14.42-2.71,2.75-.22,4.49,14.29-8.28,33.41-24.76,42.46-35-18.33.29,7.63-7.01,1.4,3.73,14.56-11.26,3.01,1.96,17.44-.72-6.39,4.06-13.93,6.94-17.24,14.73-16.03,7.45-17.34,15.17-33.26,19.95h0c-14.93,7.13-28.6,43.34-8.46,29.39,11.32-7.83,27.72-19.26,39.23-15.12,4.54,2.53,20.79,1.45,13.48-4.77,4.86,3.36,14.44-8.25,25.55-12.67.8-7.11,29.93-21.23,12.94-20.82,8.51-1.57-3.99-7.69-11.9-11.42,13.4-8.45-15.98-9.64-6.36-13.71-15.31-.7-1.01,1.51,1.84-6.64-10.54,2.13-12.92-8.01,1.18-9.83,25.68-3.3,46.56-5.92,72.88-2.75,8.19.98,41.87,16.34,25.35,15-21.31-10.84-1.15,8.34,9.88,1.16,15.56-2.52,4.36,8.67,10.54,8.47,14.11,10.62-27,.56-8.62,10.82,2.79,5.29,8.7,11.33,11.61,16.42,4.29,4.43,1.58,2.21-5.41,4.42-9.82,4.68,20.35,18.76,15.51,17.79-10.82-2.02-26.67,1.98-30.2-11.87.12-19.11-12.9-8.77-4.71,5.13.73,17.84,41.05-.47,22.57,19.11-14.63-11.4,1.45,18.8-8.67,11.95-9.76-4.47,2.26-12.61-12.43-10.45,8.88,5.8.55,10.46,2.39,17.56-8.7-.79,7.79,8.59-2.03,6.27-8.13,1.72-11.39-10.9-12.39-11.82-.06,0-.11-.01-.17-.02.05-.05.11-.04.17.02,25.28,2.94.94-11.98-11.43-12.57-11.23-11.9-37.18,13.65-29.48,11.95-3.88,18.16-36.06,21.23-27.18,42.57,2.85,14.09,16.46-8.17,17.7,3.79,6.85,8.55,1.93,16.51-5.84,14.73,9.54,7.05-5.1,8.93.07-3.08,12.83-16.15-16-7.41-6.44,10.51-3.57,4.89-16.09,9.11-22.61,14.32,3.67-7.77-4.37-20.48-10.52-31.64,7.14-6.5,1.54-12.29-2.86-11.42-3.62,2.11-2.95-10.65-8.4,4.94,10.27,2.41-1.6,7.94,1.45,12.12,5.98-.53.27,1.29.93,5.73,12.15,7.74-12.45,12.42-.94,15.75-14.26,9.33-4.35,6.75,6.78,7.54,14.41-4.39,10.66,5.32-.36,5.18-28.63-4.05,7.69,12.35-5.32,27.13-6.45,14.36-33.74-16.96-31.91,7.88-5.96,14.43-7.88,18.94-7.4,33.57,28.42.93-14.06,18.29-10.79,33.26-17.99-.12-23.71,18.45-36.93,30.15,2.75,10.89.16,18.23-3.98,29.64-1.17,21.12,16.13,39.89,31.86,54.97,16.67,8.68,36.64,15.18,54.98,13.97,13.03-643,19.7,8.52,32.17,6.65,14.02-3.02,22.73,11.05,11.59,20.64,16.84,8.53,11.08,21.55,23.36,30.15-21.72,9.48,1.95,24.33,12.32,28.59-110.28,4.65-206.61-58.39-251.18-163.35ZM342.13,178.7c10.1,13.71-7.98,1.04-3.85,12.64-1.9,5.16.28,13.4-9.26,9.41-4.14,6.41-29.94,7.41-18.34-.92,8.65-.32,16.64-17.87,18.37-28.05-16.58-7.59,3.1-14.19,1.51-24.12h0c26.04-5.95-10.26,11.08,3.77,20.35-3.67,16.21,17.93-4.05,20.95,3.77-6.6-2.89-23.43,15.8-13.15,6.92ZM380.59,329.61c-7.33-1.71-16.11,1.44-20.05-4.79-18.59-8.97-10.89,18.12-21.44,14.98-13.47-1.4-16.53-12.59-28.89-14.27-4.24,1.17-20.93-5.57-8.15-10.19,3.12-9.53-2.63-11.4-11.51-8.08-18.44-9.84-53.44,10.85-60.99-7.35h0c10.79.19,16.82-2.19,24.12-9.04-2-13.24,18.46-19.91,19.49-28.6,9.88,16.37,22.73-13.11,27.58,6.57,5.07,8.84,33.02,19.67,17.51,28.82-21.8-6,2.86,14.96,2.74,2.16,18.03.69-1.98-23.32,11.65-14.98,5.44-4.86-28.76-16.23-22.4-32.99,8.19,2.04,9.12,13.21,20.76,18.73,10.82,9.05,16.84,29.24,24.49,33.87,1.53-7.66.71-12.01,8.99-6.6,3.4-4.68-13.02-13.65-9.07-14.51,13.49-12.33,14.14.57,17.5,7.8,1.59,13.11,6.25,4.8,11.16,8.51,9.63-4.68,21.38-5.21,28.55-11.71,1.5-4.19,2.67,23.75-1.39,33.03-11.79-2.07-18.28,12.86-30.67,8.66ZM416.07,469.78c10.28-1.19-.48,12.8-8.63,12.52,1.86-4.84,1.65-12.36,8.63-12.52ZM402.17,530.37c-22.19,8.07-3.4-4.34,5.39-8.74,8.69-13.9,35.85-14.4,37.55-33.29h0c-6.27-9.38,4.11-19.6,11.66-28.24,12.94-20.93,31.99-38.27,39.03-62.57,9.89-32.6-28.83,30.48-30.34,5.64-18.49-5.37-30.39-18.17-36.89-36.67-4.23-3.39-21.9-28.12-14.83-23.48,2.92-7.55,13.36-4.18,14.24,8.21,8.21,16.62,21.31,19.92,31.45,34.59-.11,20.04,10.92,13.99,19.45,2.83,14.99-9.87,19.52-27.02,28.55-39.12,3.35-9.6,12.56-30.71,1.51-33.05-8.69-5.22-5.87-8.2-10.45,5.74-3.8,9.36-38.21-4.23-23.99-16.29,5.63,4.28,20.6,19.59,26.44,1.73,8.47,6.93,21.99-4.59,28.05-13.8,8.29,4.09,9.05,7.62,15.72,9.23,1.79-16.7,11.09,49.08,17.6,18.75-1.9-22.68-1.37-45.58-1.22-68.38,1.35-21.57,11,23.89,12.99,29.07,1.52,70.77-24.82,135.78-66.68,178.72-18.31,18.78-48.47,48.46-105.26,69.12Z" fill="#ffffff" fill-rule="evenodd"/>
      </svg>`;
earthSvg.src = "data:image/svg+xml;base64," + btoa(earthSvgData);

import { DebrisViz } from "./DebrisViz.js";

let selectedDebris = null;

//objects color
let activecolor = "#F0F0F0";
let nonactivecolor = "#c56a2a";

let accento = "red";

const famousObjectsList = [
  { jcat: "A09093", label: "Elon Musk's\nTesla Roadster" },
  { jcat: "S00005", label: "Vanguard 1\nOldest satellite\nin space" },
  /* { jcat: "S39634", label: "Sentinel-1A\nESA Earth Observation" }, */
  { jcat: "S36508", label: "CryoSat-2\nESA Climate\nMission" },
  { jcat: "S25544", label: "International\nSpace Station" },
  { jcat: "S10271", label: "Voyager 1" },
  { jcat: "S20580", label: "Hubble Space\nTelescope" },
  { jcat: "S48274", label: "Chinese Space\nStation" }
];

//SECOND GRAPH = Orbits
const orbits = new DebrisViz("#orbits-container", {
  showAxis: false,
});

orbits.setDrawLogic(function (ctx, data, xS, yS) {
  const transform = d3.zoomTransform(orbits.canvasSelection.node());
  ctx.save();
  ctx.translate(transform.x, transform.y);
  ctx.scale(transform.k, transform.k);

  const w = orbits.width;
  const h = orbits.height;
  const centerX = w / 2;
  const centerY = h / 2;
  const currentDomain = orbits.currentDomain || 40000;
  const kmToPx = d3
    .scaleLinear()
    .domain([0, currentDomain])
    .range([0, d3.min([w, h]) / 2 - 20]);
  // Reference Orbit Shells (LEO, MEO, GEO)
const referenceOrbits = [2000, 20000, 35786];
const orbitNames = ["LEO", "MEO", "GEO"];

referenceOrbits.forEach((alt, i) => {
  const r = kmToPx(alt + 6378);
  ctx.beginPath();
  ctx.arc(centerX, centerY, r, 0, 2 * Math.PI);
  ctx.strokeStyle = "#444";
  ctx.setLineDash([5, 5]); 
  ctx.lineWidth = 1 / transform.k;
  ctx.stroke();
  ctx.setLineDash([]); 

  ctx.fillStyle = "#888";
  ctx.font = `${10 / transform.k}px GeistMono`;
  ctx.fillText(orbitNames[i], centerX + r + 5, centerY);
});

  //Earth
  if (earthSvg.complete) {
    const r_earth = kmToPx(6378);
    const size = r_earth * 2;

    ctx.drawImage(earthSvg, centerX - r_earth, centerY - r_earth, size, size);
  } else {
    ctx.beginPath();
    ctx.arc(centerX, centerY, kmToPx(6378), 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();

    earthSvg.onload = () => orbits.render();
  }

  for (let i = 0; i < data.length; i += 2) {
    drawOrbit(ctx, data[i], centerX, centerY, kmToPx, transform.k, false);
  }

  if (selectedDebris) {
    drawOrbit(ctx, selectedDebris, centerX, centerY, kmToPx, transform.k, true);
  }

  ctx.restore();
});

function drawOrbit(ctx, d, centerX, centerY, kmToPx, k, isSelected) {
  const r_p = kmToPx(d.p + 6378);
  const r_a = kmToPx(d.a + 6378);
  const semiMajorA = (r_p + r_a) / 2;
  const eccentricity_c = semiMajorA - r_p;
  const semiMinorB = Math.sqrt(
    Math.pow(semiMajorA, 2) - Math.pow(eccentricity_c, 2),
  );
  const rotationRad = (d.inc * Math.PI) / 180;
  const eX = centerX + eccentricity_c * Math.cos(rotationRad);
  const eY = centerY + eccentricity_c * Math.sin(rotationRad);

  ctx.beginPath();
  ctx.ellipse(eX, eY, semiMajorA, semiMinorB, rotationRad, 0, 2 * Math.PI);

  if (isSelected) {
    ctx.strokeStyle = accento;
    ctx.lineWidth = 3 / k;
    ctx.globalAlpha = 1.0;
  } else {
    ctx.strokeStyle = d.Active === "A" ? activecolor : nonactivecolor;
    ctx.lineWidth = 0.5 / k;
    ctx.globalAlpha = 0.05;
  }
  ctx.stroke();
}

let transitionValue = { domain: 40000 };

function scaleOrbit() {
  let targetDomain;

  if (selectedDebris) {
    const padding = 1.2;
    const orbitMax = (selectedDebris.a + 6378) * padding;

    if (selectedDebris.ExpandedStatus === "In solar orbit") {
      targetDomain = 1500000;
    } else {
      targetDomain = Math.max(orbitMax, 40000);
    }
  } else {
    targetDomain = 40000;
  }

  d3.select(transitionValue)
    .interrupt()
    .transition()
    .duration(750)
    .ease(d3.easeCubicOut)
    .tween("orbitScale", function () {
      const i = d3.interpolate(transitionValue.domain, targetDomain);
      return function (t) {
        transitionValue.domain = i(t);
        orbits.currentDomain = transitionValue.domain;
        orbits.render();
      };
    });
}

orbits.loadData("./Database/currentcat_extended.csv").then(function () {
  orbits.iZoom();
});

//FIRST GRAPH = Scatterplot
let showPointsMap = true;
let showHeatMap = true;

d3.select(".heatmap-btn").on("click", function () {
  if (showHeatMap === false) {
    showHeatMap = true;
  } else {
    showHeatMap = false;
  }
  scatterplot.render();
});

d3.select(".pointmap-btn").on("click", function () {
  if (showPointsMap === true) {
    showPointsMap = false;
  } else {
    showPointsMap = true;
  }
  scatterplot.render();
});

// Seleziona i pallini nella legenda HTML
let hoverAObject = false;
let hoverNObject = false;
let famousObjectsLabel = false;

const dotActive = document.querySelector(".legend-item.oactive");
const dotInactive = document.querySelector(".legend-item.oinactive");
const dotFamous = document.querySelector(".legend-item.ofamous");

let lockAObject = false;
let lockNObject = false;
let lockFamous = false;

// --- ACTIVE OBJECTS ---
dotActive.addEventListener("mouseover", () => {
  if (!lockAObject) {
    hoverAObject = true;
    scatterplot.render();
  }
});
dotActive.addEventListener("mouseout", () => {
  if (!lockAObject) {
    hoverAObject = false;
    scatterplot.render();
  }
});

dotInactive.addEventListener("mouseover", () => {
  if (!lockNObject) {
    hoverNObject = true;
    scatterplot.render();
  }
});
dotInactive.addEventListener("mouseout", () => {
  if (!lockNObject) {
    hoverNObject = false;
    scatterplot.render();
  }
});

dotFamous.addEventListener("mouseover", () => {
  if (!lockFamous) {
    famousObjectsLabel = true;
    scatterplot.render();
  }
});
dotFamous.addEventListener("mouseout", () => {
  if (!lockFamous) {
    famousObjectsLabel = false;
    scatterplot.render();
  }
});

const scatterplot = new DebrisViz("#scatterplot-container", {});
window.scatterplot = scatterplot;
const label = d3.select("body").append("div").attr("class", "label");

scatterplot.canvasSelection.on("mousemove", function (event) {
  if (showPointsMap === true){
    const [mouseX, mouseY] = d3.pointer(event);
  const closest = scatterplot.tree.find(mouseX, mouseY, 10);
  if (closest === selectedDebris) return;

  selectedDebris = closest;

  orbits.render();
  scaleOrbit();

  if (closest) {
    label.style("opacity", 1);

    if (closest.ExpandedStatus !== "In solar orbit") {
      label.html(`
                        <b>${closest.Name}</b><br>
                        State: ${closest.State}<br>
                        LDate: ${closest.LDate}<br>
                        Alt: ${Math.round(closest.Mean_Altitude)} km<br>
                        Active: ${closest.Active === "A" ? "Yes" : "No"} <br>
                        Type: ${getObjectName(closest.Type)} <br>
                        Status: ${closest.ExpandedStatus}
                    `);
    } else {
      label.html(`
                        <b>${closest.Name}</b><br>
                        State: ${closest.State}<br>
                        LDate: ${closest.LDate}<br>
                        Active: ${closest.Active === "A" ? "Yes" : "No"} <br>
                        Type: ${getObjectName(closest.Type)} <br>
                        Status: ${closest.ExpandedStatus}
                    `);
    }

    label
      .style("left", event.pageX + 15 + "px")
      .style("top", event.pageY - 28 + "px");
  } else {
    label.style("opacity", 0);
  }

  scaleOrbit();}
});

function getObjectName(type) {
  if (type.startsWith("P")) return "Payload";
  if (type.startsWith("R")) return "Rocket Stage";
  if (type.startsWith("D")) return "Debris";
  if (type.startsWith("C")) return "Component";
  return "Unknown";
}

let cachedContours = null;
let lastDataRef = null;

function fillMultiLineText(ctx, text, x, y, lineHeight) {
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    ctx.strokeText(line, x, y + i * lineHeight);
    ctx.fillText(line, x, y + i * lineHeight);
  });
}

function renderHighlights(ctx, targets, xS, yS, isSolar, k, margin) {
  targets.forEach(function (d) {
    let matchOrbit;
    if (isSolar) {
      matchOrbit = d.ExpandedStatus === "In solar orbit";
    } else {
      matchOrbit = d.ExpandedStatus !== "In solar orbit";
    }

    if (matchOrbit) {
      const x = xS(d.realDate);
      let y;
      if (isSolar) {
        y = margin.top + 20;
      } else {
        y = yS(+d.Mean_Altitude);
      }

      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = accento;
      ctx.lineWidth = 2;

      ctx.arc(x, y, 7, 0, 2 * Math.PI);
      ctx.stroke();

      if (k > 2 || famousObjectsLabel === true) {
        const info = famousObjectsList.find(function (f) {
          return d.JCAT.includes(f.jcat);
        });

        if (info) {
          ctx.save();
          ctx.font = "bold 13px sans-serif";
          ctx.textAlign = "left";
          ctx.textBaseline = "middle";

          ctx.strokeStyle = "black";
          ctx.lineWidth = 3;
          ctx.fillStyle = accento;

          const textToDisplay = info.label;
          const lineHeight = 15;

          fillMultiLineText(ctx, textToDisplay, x + 15, y, lineHeight);

          ctx.restore();
        }
      }
      ctx.restore();
    }
  });
}

scatterplot.setDrawLogic(function (ctx, data, xS, yS) {
  const w = scatterplot.width;
  const h = scatterplot.height;
  const margin = scatterplot.margin;
  const solarY = margin.top + 20;

  const transform = d3.zoomTransform(scatterplot.canvasSelection.node());
  const k = transform.k;

  // Famous objects
  const targets = data.filter((d) =>
    famousObjectsList.some((f) => d.JCAT && d.JCAT.includes(f.jcat)),
  );

  //SOLAR ORBIT
  let r;
  ctx.save();
  ctx.beginPath();
  ctx.rect(
    scatterplot.margin.left,
    scatterplot.margin.top,
    scatterplot.width - scatterplot.margin.left - scatterplot.margin.right,
    scatterplot.height - scatterplot.margin.top + 50,
  );
  ctx.clip();

  data.forEach((d) => {
    if (d.ExpandedStatus === "In solar orbit") {
      ctx.beginPath();

      let alpha = 1.0;
      if (hoverAObject && d.Active !== "A") alpha = 0.1;
      if (famousObjectsLabel === true) alpha = 0.05;
      if (hoverNObject && d.Active === "A") alpha = 0.1;
      ctx.globalAlpha = alpha;

      if (d.Active === "A") {
        ctx.fillStyle = activecolor;
        r = 1.8;
      } else {
        ctx.fillStyle = nonactivecolor;
        r = 1.5;
      }

      ctx.arc(xS(d.realDate), solarY, r, 0, 2 * Math.PI);
      ctx.fill();

      ctx.globalAlpha = 1.0;
    }
  });

  renderHighlights(ctx, targets, xS, yS, true, k, margin);
  ctx.restore();

  //MAPS
  ctx.save();
  ctx.beginPath();
  ctx.rect(
    scatterplot.margin.left,
    scatterplot.margin.top + 50,
    scatterplot.width - scatterplot.margin.left - scatterplot.margin.right,
    scatterplot.height -
      scatterplot.margin.bottom -
      (scatterplot.margin.top + 50),
  );
  ctx.clip();

  if (showHeatMap) {
    if (lastDataRef !== data) {
      const earthData = data.filter(
        (d) => d.ExpandedStatus !== "In solar orbit",
      );
      const densityGenerator = d3
        .contourDensity()
        .x((d) => scatterplot.xScale(d.realDate))
        .y((d) => scatterplot.yScale(+d.Mean_Altitude))
        .size([w, h])
        .bandwidth(10)
        .cellSize(5)
        .thresholds(1000);

      cachedContours = densityGenerator(earthData);
      lastDataRef = data;
    }

    if (cachedContours) {
      const colorScale = d3
        .scaleSequential(d3.interpolateOranges)
        .domain([0, d3.max(cachedContours, (d) => d.value)]);
      const geoPath = d3.geoPath().context(ctx);
      const transform = d3.zoomTransform(scatterplot.canvasSelection.node());
      ctx.save();
      ctx.translate(transform.x, transform.y);
      ctx.scale(transform.k, transform.k);

      cachedContours.forEach((contour, index) => {
        if (index % 10 === 0) {
          ctx.beginPath();
          geoPath(contour);
          /* ctx.globalAlpha = 0.3;
                ctx.fillStyle = colorScale(contour.value);
                ctx.fill(); */
          ctx.strokeStyle = colorScale(contour.value);
          ctx.globalAlpha = 0.5;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
      ctx.restore();
    }
  }

  if (showPointsMap) {
    const activePoints = [];
    const inactivePoints = [];

    data.forEach((d) => {
      if (d.ExpandedStatus !== "In solar orbit") {
        if (d.Active === "A") activePoints.push(d);
        else inactivePoints.push(d);
      }
    });

    //Inactive
    ctx.save();
    if (hoverAObject) {
      ctx.globalAlpha = 0.5;
    } else if (famousObjectsLabel) {
      ctx.globalAlpha = 0.2;
    } else {
      ctx.globalAlpha = 1;
    }

    if (ctx.globalAlpha > 0) {
      ctx.fillStyle = nonactivecolor;
      ctx.beginPath();
      inactivePoints.forEach((d) => {
        const x = xS(d.realDate),
          y = yS(d.Mean_Altitude);
        ctx.moveTo(x + 1.5, y);
        ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
      });
      ctx.fill();
    }
    ctx.restore();

    //Active
    ctx.save();
    if (hoverNObject) {
      ctx.globalAlpha = 0.5;
    } else if (famousObjectsLabel) {
      ctx.globalAlpha = 0.2;
    } else {
      ctx.globalAlpha = 1.0;
    }

    if (ctx.globalAlpha > 0) {
      ctx.fillStyle = activecolor;
      ctx.beginPath();
      activePoints.forEach((d) => {
        const x = xS(d.realDate),
          y = yS(d.Mean_Altitude);
        ctx.moveTo(x + 1.8, y);
        ctx.arc(x, y, 1.8, 0, 2 * Math.PI);
      });
      ctx.fill();
    }
    ctx.restore();
  }

  // Famous objects (Earth)
  renderHighlights(ctx, targets, xS, yS, false, k, margin);
  ctx.restore();
});

scatterplot.loadData("./Database/currentcat_extended.csv").then(function () {
  scatterplot.iZoom();
});

//FILTERS
function aggiornaContatore(nuovoTotale) {
  const elemento = d3.select("#object-count");
  const valorePartenza = +elemento.text().replace(/\./g, "").trim() || 0;

  elemento
    .interrupt()
    .transition()
    .duration(800)
    .ease(d3.easeCubicOut)
    .tween("text", function () {
      const interpolatore = d3.interpolateRound(valorePartenza, nuovoTotale);
      return function (t) {
        this.textContent = interpolatore(t).toLocaleString("it-IT");
      };
    });
}

d3.selectAll("select").on("change", function () {
  const category = d3.select(this).attr("data-cat");
  const value = this.value;

  scatterplot.setFilter(category, value);
  orbits.setFilter(category, value);

  aggiornaContatore(scatterplot.filteredData.length);
});

//VIZ TOGGLE
d3.selectAll('input[name="map-mode"]').on("change", function () {
  const mode = this.value;
  
  const activeItem = d3.select(".legend-item.oactive");
  const inactiveItem = d3.select(".legend-item.oinactive");

  if (mode === "heatmap") {
    showHeatMap = true;
    showPointsMap = false;

    activeItem.classed("disabled", true);
    inactiveItem.classed("disabled", true);
    
    hoverAObject = false;
    hoverNObject = false;
  } else {
    showHeatMap = (mode === "both");
    showPointsMap = true;

    activeItem.classed("disabled", false);
    inactiveItem.classed("disabled", false);
  }

  if (window.scatterplot) window.scatterplot.render();
});

scatterplot.loadData("./Database/currentcat_extended.csv").then(function () {
  scatterplot.iZoom();
  aggiornaContatore(scatterplot.filteredData.length);
});

//FOOTER
document.body.style.overflow = "hidden";

d3.select("#btn-footer-toggle").on("click", function() {
  d3.select("#main-footer").classed("open", true);
});

d3.select("#btn-close-footer").on("click", function() {
  d3.select("#main-footer").classed("open", false);
});

// ==========================================
// ANTI-STRETCH
// ==========================================
window.addEventListener("resize", () => {
  [scatterplot, orbits].forEach(viz => {
    if (!viz) return;

    const parentNode = viz.container.node().parentElement;
    const rect = parentNode.getBoundingClientRect();

    viz.width = rect.width;
    viz.height = rect.height;
    
    viz.canvas.width = viz.width;
    viz.canvas.height = viz.height;

    viz.svg.attr("width", viz.width).attr("height", viz.height);
    
    if (viz.showAxis && viz.xScale && viz.yScale) {
      viz.xScale.range([viz.margin.left, viz.width - viz.margin.right]);
      viz.gx
        .attr("transform", `translate(0, ${viz.height - viz.margin.bottom})`)
        .call(viz.xAxis);

      viz.yScale.range([viz.height - viz.margin.bottom, viz.margin.top + 50]);
      viz.gy.call(viz.yAxis);
      
      viz.gOrbits.call(viz.orbitAxis);
      viz.styleOrbitAxis();
    }

    if (viz.updateQuadtree) {
      viz.updateQuadtree();
    }
    
    viz.render();
  });
});