import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import Chart from 'chart.js';



import './Styles/social.css';
import './Styles/index.css';

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$(function () {
    var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: 'bar', //pie
  data: {
    labels: ["CSS", "HTML", "JS", "REACT", "BOOTSTRAP"],
    datasets: [{
      label: 'Knowdledge Scale',
      data: [8, 9, 8, 7, 9, 0,10],
      backgroundColor: [
        'rgba(42, 42, 42, 0.7)',
        'rgba(0, 0, 0, 0.3)',
        'rgba(28,54,67, 0.5)',
        'rgba(19,60,80,0.5)',
      ],
      borderColor: [
        'rgba(42,42,42,1)',
        'rgba(0, 0, 0, 1)',
        'rgba(28,54,67, 1)',
        'rgba(19,60,80, 1)',
        'rgba(19,60,80, 1)'

      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      
        
          beginAtZero: true
        
      
    }
  }
});

});

$(function () {
  $(".facebook").hover(function () {$(".social-container-wrap")});
  $(".googleplus").hover(function () {$(".social-container-wrap")});
  $(".pinterest").hover(function () {$(".social-container-wrap")});
  $(".dribbble").hover(function () {$(".social-container-wrap")});
  $(".instagram").hover(function () { $(".social-container-wrap")});
  $(".codepen").hover(function () { $(".social-container-wrap")});
  $(".envelope").hover(function () { $(".social-container-wrap")});
  $(".linkedin").hover(function () { $(".social-container-wrap")});
});

ReactDOM.render(<App />, document.getElementById('app'));


