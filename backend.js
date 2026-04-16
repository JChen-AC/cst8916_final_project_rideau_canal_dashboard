
require("dotenv").config();
const { CosmosClient } = require("@azure/cosmos");
const { BlobServiceClient } = require("@azure/storage-blob");
const fs = require("fs");
const express = require('express');
const router    = express.Router();

const client = new CosmosClient({
  endpoint: process.env.COSMOS_ENDPOINT,   // e.g. https://your-account.documents.azure.com:443/
  key: process.env.COSMOS_KEY
});

const blobServiceClient = BlobServiceClient.fromConnectionString(
  process.env.AZURE_STORAGE_CONNECTION_STRING
);

router.get('/get_cosmodb', async (req,res)=>{
  try{
    const {resources} = await container.items.query("SELECT TOP 3 * FROM c  ORDER BY c.dateTimeStamp DESC").fetchAll();
    res.json(resources);
  }
  catch(err){
    res.status(500).json({ error: err.message });
  }
});

router.get('/get_blob', async (req,res)=>{
  try{
    const {resources} = await container.items.query("SELECT TOP 3 * FROM c  ORDER BY c.dateTimeStamp DESC").fetchAll();
    res.json(resources);
  }
  catch(err){
    res.status(500).json({ error: err.message });
  }
});

function fetchAndRender(){
  fetch("/get_cosmodb")
    .then(res => res.json())
    .then(cosmo_response => {
        renderCosmoUpdate(cosmo_response);
      })
      .catch(err => console.error("Poll error:", err));

}

  function renderCosmoUpdate(data){
    const listContainer = document.getElementById("trafficlist");
    listContainer.innerHTML="";
    data.forEach(row =>{
      const li = document.createElement("li")
      li.textContent = row.spikedate;
      listContainer.appendChild(li);
    });
  }


router.get("/start_charts",(req,res)=>{
//CHARTS 
const ctx   = document.getElementById('historyData').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],  // X axis
    datasets: [{
      label:           'Temperature (°C)',
      data:            [4, 7, 12, 18, 22, 26],            // Y axis values
      borderColor:     'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.1)',
      tension:         0.4,     // curve smoothing (0 = straight lines)
      fill:            true,    // fill area under line
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title:  { display: true, text: 'Monthly Temperature' }
    },
    scales: {
      y: { beginAtZero: false }
    }
  }
});

const ctx2   = document.getElementById('icehistory').getContext('2d');
const chart2 = new Chart(ctx2, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],  // X axis
    datasets: [{
      label:           'Temperature (°C)',
      data:            [4, 7, 12, 18, 22, 26],            // Y axis values
      borderColor:     'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.1)',
      tension:         0.4,     // curve smoothing (0 = straight lines)
      fill:            true,    // fill area under line
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title:  { display: true, text: 'Monthly Temperature' }
    },
    scales: {
      y: { beginAtZero: false }
    }
  }
});

const ctx3   = document.getElementById('temphistory').getContext('2d');
const chart3 = new Chart(ctx3, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],  // X axis
    datasets: [{
      label:           'Temperature (°C)',
      data:            [4, 7, 12, 18, 22, 26],            // Y axis values
      borderColor:     'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.1)',
      tension:         0.4,     // curve smoothing (0 = straight lines)
      fill:            true,    // fill area under line
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title:  { display: true, text: 'Monthly Temperature' }
    },
    scales: {
      y: { beginAtZero: false }
    }
  }
});

const ctx4   = document.getElementById('snowhistory').getContext('2d');
const chart4 = new Chart(ctx4, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],  // X axis
    datasets: [{
      label:           'Temperature (°C)',
      data:            [4, 7, 12, 18, 22, 26],            // Y axis values
      borderColor:     'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.1)',
      tension:         0.4,     // curve smoothing (0 = straight lines)
      fill:            true,    // fill area under line
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title:  { display: true, text: 'Monthly Temperature' }
    },
    scales: {
      y: { beginAtZero: false }
    }
  }
});
});

module.exports = router;