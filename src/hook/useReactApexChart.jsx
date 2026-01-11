import ReactApexChart from "react-apexcharts";

const useReactApexChart = () => {
  let chartSeries = [
    {
      name: "This month",
      data: [10, 20, 12, 30, 14, 35, 16, 32, 14, 25, 13, 28],
    },
  ];

  let chartOptions = {
    chart: {
      height: 264,
      type: "line",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      dropShadow: {
        enabled: false,
        top: 6,
        left: 0,
        blur: 4,
        color: "#000",
        opacity: 0.1,
      },
    },

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["#487FFF"], // Specify the line color here
      width: 3,
    },
    markers: {
      size: 0,
      strokeWidth: 3,
      hover: {
        size: 8,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: true,
      },
      y: {
        show: false,
      },
      z: {
        show: false,
      },
    },
    grid: {
      row: {
        colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
      borderColor: "#D1D5DB",
      strokeDashArray: 3,
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return "$" + value + "k";
        },
        style: {
          fontSize: "14px",
        },
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      tooltip: {
        enabled: false,
      },
      labels: {
        formatter: function (value) {
          return value;
        },
        style: {
          fontSize: "14px",
        },
      },
      axisBorder: {
        show: false,
      },
      crosshairs: {
        show: true,
        width: 20,
        stroke: {
          width: 0,
        },
        fill: {
          type: "solid",
          color: "#487FFF40",
        },
      },
    },
  };

  let barChartSeries = [
    {
      name: "Sales",
      data: [
        {
          x: "Sun",
          y: 15,
        },
        {
          x: "Mon",
          y: 12,
        },
        {
          x: "Tue",
          y: 18,
        },
        {
          x: "Wed",
          y: 20,
        },
        {
          x: "Thu",
          y: 13,
        },
        {
          x: "Fri",
          y: 16,
        },
        {
          x: "Sat",
          y: 6,
        },
      ],
    },
  ];

  let barChartOptions = {
    chart: {
      type: "bar",
      height: 264,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        horizontal: false,
        columnWidth: 24,
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      colors: ["#dae5ff"], // Set the starting color (top color) here
      gradient: {
        shade: "light", // Gradient shading type
        type: "vertical", // Gradient direction (vertical)
        shadeIntensity: 0.5, // Intensity of the gradient shading
        gradientToColors: ["#dae5ff"], // Bottom gradient color (with transparency)
        inverseColors: false, // Do not invert colors
        opacityFrom: 1, // Starting opacity
        opacityTo: 1, // Ending opacity
        stops: [0, 100],
      },
    },
    grid: {
      show: false,
      borderColor: "#D1D5DB",
      strokeDashArray: 4, // Use a number for dashed style
      position: "back",
      padding: {
        top: -10,
        right: -10,
        bottom: -10,
        left: -10,
      },
    },
    xaxis: {
      type: "category",
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
    yaxis: {
      show: false,
    },
  };

  let donutChartSeries = [500, 500, 500];
  let donutChartOptions = {
    colors: ["#FF9F29", "#487FFF", "#45B369"],
    labels: ["Active", "New", "Total"],
    legend: {
      show: false,
    },
    chart: {
      type: "donut",
      height: 270,
      sparkline: {
        enabled: true, // Remove whitespace
      },
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    stroke: {
      width: 0,
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  let paymentStatusChartSeries = [
    {
      name: "Net Profit",
      data: [
        20000, 16000, 14000, 25000, 45000, 18000, 28000, 11000, 26000, 48000,
        18000, 22000,
      ],
    },

    {
      name: "Revenue",
      data: [
        15000, 18000, 19000, 20000, 35000, 20000, 18000, 13000, 18000, 38000,
        14000, 16000,
      ],
    },
  ];

  let paymentStatusChartOptions = {
    colors: ["#487FFF", "#FF9F29"],
    labels: ["Active", "New", "Total"],
    legend: {
      show: false,
    },

    grid: {
      show: true,
      borderColor: "#D1D5DB",
      strokeDashArray: 4, // Use a number for dashed style
      position: "back",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: 10,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      categories: [
        "0",
        "5000",
        "10,000",
        "20,000",
        "30,000",
        "50,000",
        "60,000",
        "60,000",
        "70,000",
        "80,000",
        "90,000",
        "100,000",
      ],
    },
    fill: {
      opacity: 1,
      width: 18,
    },
  };

  let createChart = (chartColor) => {
    let currentYear = new Date().getFullYear();

    let series = [
      {
        name: "series1",
        data: [35, 45, 38, 41, 36, 43, 37, 55, 40],
      },
    ];

    var options = {
      chart: {
        type: "area",
        width: 80,
        height: 42,
        sparkline: {
          enabled: true, // Remove whitespace
        },

        toolbar: {
          show: false,
        },
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
        colors: [chartColor],
        lineCap: "round",
      },
      grid: {
        show: true,
        borderColor: "transparent",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        row: {
          colors: undefined,
          opacity: 0.5,
        },
        column: {
          colors: undefined,
          opacity: 0.5,
        },
        padding: {
          top: -3,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      fill: {
        type: "gradient",
        colors: [chartColor], // Set the starting color (top color) here
        gradient: {
          shade: "light", // Gradient shading type
          type: "vertical", // Gradient direction (vertical)
          shadeIntensity: 0.5, // Intensity of the gradient shading
          gradientToColors: [`${chartColor}00`], // Bottom gradient color (with transparency)
          inverseColors: false, // Do not invert colors
          opacityFrom: 0.75, // Starting opacity
          opacityTo: 0.3, // Ending opacity
          stops: [0, 100],
        },
      },
      // Customize the circle marker color on hover
      markers: {
        colors: [chartColor],
        strokeWidth: 2,
        size: 0,
        hover: {
          size: 8,
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        categories: [
          `Jan ${currentYear}`,
          `Feb ${currentYear}`,
          `Mar ${currentYear}`,
          `Apr ${currentYear}`,
          `May ${currentYear}`,
          `Jun ${currentYear}`,
          `Jul ${currentYear}`,
          `Aug ${currentYear}`,
          `Sep ${currentYear}`,
          `Oct ${currentYear}`,
          `Nov ${currentYear}`,
          `Dec ${currentYear}`,
        ],
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };

    return (
      <ReactApexChart
        options={options}
        series={series}
        type='area'
        height={42}
        width={80}
      />
    );
  };

  let createChartTwo = (chartColor, height) => {
    let series = [
      {
        name: "This Day",
        data: [4, 18, 13, 40, 30, 50, 30, 60, 40, 75, 45, 90],
      },
    ];

    let options = {
      chart: {
        type: "area",
        width: "100%",
        height: 162,
        sparkline: {
          enabled: false, // Remove whitespace
        },
        toolbar: {
          show: false,
        },
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 4,
        colors: [chartColor],
        lineCap: "round",
      },
      grid: {
        show: true,
        borderColor: "red",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        row: {
          colors: undefined,
          opacity: 0.5,
        },
        column: {
          colors: undefined,
          opacity: 0.5,
        },
        padding: {
          top: -30,
          right: 0,
          bottom: -10,
          left: 0,
        },
      },
      fill: {
        type: "gradient",
        colors: [chartColor], // Set the starting color (top color) here
        gradient: {
          shade: "light", // Gradient shading type
          type: "vertical", // Gradient direction (vertical)
          shadeIntensity: 0.5, // Intensity of the gradient shading
          gradientToColors: [`${chartColor}00`], // Bottom gradient color (with transparency)
          inverseColors: false, // Do not invert colors
          opacityFrom: 0.6, // Starting opacity
          opacityTo: 0.3, // Ending opacity
          stops: [0, 100],
        },
      },
      // Customize the circle marker color on hover
      markers: {
        colors: [chartColor],
        strokeWidth: 3,
        size: 0,
        hover: {
          size: 10,
        },
      },
      xaxis: {
        categories: [
          `Jan`,
          `Feb`,
          `Mar`,
          `Apr`,
          `May`,
          `Jun`,
          `Jul`,
          `Aug`,
          `Sep`,
          `Oct`,
          `Nov`,
          `Dec`,
        ],
        tooltip: {
          enabled: false,
        },
        labels: {
          formatter: function (value) {
            return value;
          },
          style: {
            fontSize: "14px",
          },
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };

    return (
      <ReactApexChart
        options={options}
        series={series}
        type='area'
        height={height}
      />
    );
  };

  let createChartThree = (chartColor) => {
    let currentYear = new Date().getFullYear();
    let series = [
      {
        name: "series1",
        data: [31, 24, 30, 25, 32, 28, 40, 32, 42, 38, 40, 32, 38, 35, 45],
      },
    ];
    let options = {
      chart: {
        type: "area",

        sparkline: {
          enabled: true, // Remove whitespace
        },

        toolbar: {
          show: false,
        },
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
        colors: [chartColor],
        lineCap: "round",
      },
      grid: {
        show: true,
        borderColor: "transparent",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        row: {
          colors: undefined,
          opacity: 0.5,
        },
        column: {
          colors: undefined,
          opacity: 0.5,
        },
        padding: {
          top: -3,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      fill: {
        type: "gradient",
        colors: [chartColor], // Set the starting color (top color) here
        gradient: {
          shade: "light", // Gradient shading type
          type: "vertical", // Gradient direction (vertical)
          shadeIntensity: 0.5, // Intensity of the gradient shading
          gradientToColors: [`${chartColor}00`], // Bottom gradient color (with transparency)
          inverseColors: false, // Do not invert colors
          opacityFrom: 0.7, // Starting opacity
          opacityTo: 0.3, // Ending opacity
          stops: [0, 100],
        },
      },
      // Customize the circle marker color on hover
      markers: {
        colors: [chartColor],
        strokeWidth: 2,
        size: 0,
        hover: {
          size: 8,
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        categories: [
          `Jan ${currentYear}`,
          `Feb ${currentYear}`,
          `Mar ${currentYear}`,
          `Apr ${currentYear}`,
          `May ${currentYear}`,
          `Jun ${currentYear}`,
          `Jul ${currentYear}`,
          `Aug ${currentYear}`,
          `Sep ${currentYear}`,
          `Oct ${currentYear}`,
          `Nov ${currentYear}`,
          `Dec ${currentYear}`,
        ],
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };

    return (
      <ReactApexChart
        options={options}
        series={series}
        type='area'
        width={130}
        height={50}
      />
    );
  };

  let createChartFour = (chartColor, height, width) => {
    let currentYear = new Date().getFullYear();

    let series = [
      {
        name: "series1",
        data: [35, 45, 38, 41, 36, 43, 37, 55, 40],
      },
    ];
    let options = {
      chart: {
        type: "area",
        width: 100,
        height: 42,
        sparkline: {
          enabled: true, // Remove whitespace
        },

        toolbar: {
          show: false,
        },
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
        colors: [chartColor],
        lineCap: "round",
      },
      grid: {
        show: true,
        borderColor: "transparent",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        row: {
          colors: undefined,
          opacity: 0.5,
        },
        column: {
          colors: undefined,
          opacity: 0.5,
        },
        padding: {
          top: -3,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      fill: {
        type: "gradient",
        colors: [chartColor], // Set the starting color (top color) here
        gradient: {
          shade: "light", // Gradient shading type
          type: "vertical", // Gradient direction (vertical)
          shadeIntensity: 0.5, // Intensity of the gradient shading
          gradientToColors: [`${chartColor}00`], // Bottom gradient color (with transparency)
          inverseColors: false, // Do not invert colors
          opacityFrom: 0.75, // Starting opacity
          opacityTo: 0.3, // Ending opacity
          stops: [0, 100],
        },
      },
      // Customize the circle marker color on hover
      markers: {
        colors: [chartColor],
        strokeWidth: 2,
        size: 0,
        hover: {
          size: 8,
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        categories: [
          `Jan ${currentYear}`,
          `Feb ${currentYear}`,
          `Mar ${currentYear}`,
          `Apr ${currentYear}`,
          `May ${currentYear}`,
          `Jun ${currentYear}`,
          `Jul ${currentYear}`,
          `Aug ${currentYear}`,
          `Sep ${currentYear}`,
          `Oct ${currentYear}`,
          `Nov ${currentYear}`,
          `Dec ${currentYear}`,
        ],
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };

    return (
      <ReactApexChart
        options={options}
        series={series}
        type='area'
        width={width}
        height={height}
      />
    );
  };

  let createChartFive = (chartColor) => {
    let currentYear = new Date().getFullYear();

    let series = [
      {
        name: "series1",
        data: [0, 10, 8, 25, 15, 26, 13, 35, 15, 39, 16, 46, 42],
      },
    ];
    let options = {
      chart: {
        type: "area",
        width: 164,
        height: 72,

        sparkline: {
          enabled: true, // Remove whitespace
        },

        toolbar: {
          show: false,
        },
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
        colors: [chartColor],
        lineCap: "round",
      },
      grid: {
        show: true,
        borderColor: "transparent",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        row: {
          colors: undefined,
          opacity: 0.5,
        },
        column: {
          colors: undefined,
          opacity: 0.5,
        },
        padding: {
          top: -3,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      fill: {
        type: "gradient",
        colors: [chartColor], // Set the starting color (top color) here
        gradient: {
          shade: "light", // Gradient shading type
          type: "vertical", // Gradient direction (vertical)
          shadeIntensity: 0.5, // Intensity of the gradient shading
          gradientToColors: [`${chartColor}00`], // Bottom gradient color (with transparency)
          inverseColors: false, // Do not invert colors
          opacityFrom: 0.8, // Starting opacity
          opacityTo: 0.3, // Ending opacity
          stops: [0, 100],
        },
      },
      // Customize the circle marker color on hover
      markers: {
        colors: [chartColor],
        strokeWidth: 2,
        size: 0,
        hover: {
          size: 8,
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        categories: [
          `Jan ${currentYear}`,
          `Feb ${currentYear}`,
          `Mar ${currentYear}`,
          `Apr ${currentYear}`,
          `May ${currentYear}`,
          `Jun ${currentYear}`,
          `Jul ${currentYear}`,
          `Aug ${currentYear}`,
          `Sep ${currentYear}`,
          `Oct ${currentYear}`,
          `Nov ${currentYear}`,
          `Dec ${currentYear}`,
        ],
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };

    return (
      <ReactApexChart
        options={options}
        series={series}
        type='area'
        width={164}
        height={72}
      />
    );
  };

  let createChartSix = (color1, color2) => {
    let series = [
      {
        name: "series1",
        data: [48, 35, 55, 32, 48, 30, 55, 50, 57],
      },
      {
        name: "series2",
        data: [12, 20, 15, 26, 22, 60, 40, 48, 25],
      },
    ];
    let options = {
      legend: {
        show: false,
      },
      chart: {
        type: "area",
        width: "100%",
        height: 270,
        toolbar: {
          show: false,
        },
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 3,
        colors: [color1, color2], // Use two colors for the lines
        lineCap: "round",
      },
      grid: {
        show: true,
        borderColor: "#D1D5DB",
        strokeDashArray: 1,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        row: {
          colors: undefined,
          opacity: 0.5,
        },
        column: {
          colors: undefined,
          opacity: 0.5,
        },
        padding: {
          top: -20,
          right: 0,
          bottom: -10,
          left: 0,
        },
      },
      fill: {
        type: "gradient",
        colors: [color1, color2],
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: [undefined, `${color2}00`], // Apply transparency to both colors
          inverseColors: false,
          opacityFrom: [0.4, 0.4], // Starting opacity for both colors
          opacityTo: [0.3, 0.3], // Ending opacity for both colors
          stops: [0, 100],
        },
      },
      markers: {
        colors: [color1, color2], // Use two colors for the markers
        strokeWidth: 3,
        size: 0,
        hover: {
          size: 10,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        tooltip: {
          enabled: false,
        },
        labels: {
          formatter: function (value) {
            return value;
          },
          style: {
            fontSize: "14px",
          },
        },
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return "$" + value + "k";
          },
          style: {
            fontSize: "14px",
          },
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };

    return (
      <ReactApexChart
        options={options}
        series={series}
        type='area'
        height={270}
      />
    );
  };

  let createChartSeven = (color1, color2) => {
    let series = [
      {
        name: "series2",
        data: [
          20000, 45000, 30000, 50000, 32000, 40000, 30000, 42000, 28000, 34000,
          38000, 26000,
        ],
      },
    ];
    var options = {
      legend: {
        show: false,
      },
      chart: {
        type: "area",
        width: "100%",
        height: 240,
        toolbar: {
          show: false,
        },
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
        width: 3,
        colors: [color1], // Use two colors for the lines
        lineCap: "round",
      },
      grid: {
        show: true,
        borderColor: "#D1D5DB",
        strokeDashArray: 1,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        row: {
          colors: undefined,
          opacity: 0.5,
        },
        column: {
          colors: undefined,
          opacity: 0.5,
        },
        padding: {
          top: -20,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      fill: {
        type: "gradient",
        colors: [color1],
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.5,
          gradientToColors: [undefined, `${color2}00`], // Apply transparency to both colors
          inverseColors: false,
          opacityFrom: [0.4, 0.4], // Starting opacity for both colors
          opacityTo: [0.1, 0.1], // Ending opacity for both colors
          stops: [0, 100],
        },
      },
      markers: {
        colors: [color1], // Use two colors for the markers
        strokeWidth: 3,
        size: 0,
        hover: {
          size: 10,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        tooltip: {
          enabled: false,
        },
        labels: {
          formatter: function (value) {
            return value;
          },
          style: {
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          // formatter: function (value) {
          //     return "$" + value + "k";
          // },
          style: {
            fontSize: "12px",
          },
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };

    return (
      <ReactApexChart
        options={options}
        series={series}
        type='area'
        height={240}
      />
    );
  };

  let createChartEight = (color) => {
    let currentYear = new Date().getFullYear();

    let series = [
      {
        name: "series1",
        data: [0, 10, 8, 25, 15, 26, 13, 35, 15, 39, 16, 46, 42],
      },
    ];
    let options = {
      chart: {
        type: "area",
        width: 164,
        height: 72,

        sparkline: {
          enabled: true, // Remove whitespace
        },

        toolbar: {
          show: false,
        },
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
        colors: [color],
        lineCap: "round",
      },
      grid: {
        show: true,
        borderColor: "transparent",
        strokeDashArray: 0,
        position: "back",
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        row: {
          colors: undefined,
          opacity: 0.5,
        },
        column: {
          colors: undefined,
          opacity: 0.5,
        },
        padding: {
          top: -3,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      fill: {
        type: "gradient",
        colors: [color], // Set the starting color (top color) here
        gradient: {
          shade: "light", // Gradient shading type
          type: "vertical", // Gradient direction (vertical)
          shadeIntensity: 0.5, // Intensity of the gradient shading
          gradientToColors: [`${color}00`], // Bottom gradient color (with transparency)
          inverseColors: false, // Do not invert colors
          opacityFrom: 0.8, // Starting opacity
          opacityTo: 0.3, // Ending opacity
          stops: [0, 100],
        },
      },
      // Customize the circle marker color on hover
      markers: {
        colors: [color],
        strokeWidth: 2,
        size: 0,
        hover: {
          size: 8,
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        categories: [
          `Jan ${currentYear}`,
          `Feb ${currentYear}`,
          `Mar ${currentYear}`,
          `Apr ${currentYear}`,
          `May ${currentYear}`,
          `Jun ${currentYear}`,
          `Jul ${currentYear}`,
          `Aug ${currentYear}`,
          `Sep ${currentYear}`,
          `Oct ${currentYear}`,
          `Nov ${currentYear}`,
          `Dec ${currentYear}`,
        ],
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };

    return (
      <ReactApexChart
        options={options}
        series={series}
        type='area'
        width={164}
        height={72}
      />
    );
  };

  // Additional chart configurations for missing components
  let columnChartSeriesOne = [
    {
      name: "Sales",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }
  ];

  let columnChartOptionsOne = {
    chart: {
      type: 'bar',
      height: 280,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: { text: '$ (thousands)' }
    },
    fill: { opacity: 1 },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  };

  let columnChartSeriesTwo = [
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }
  ];

  let columnChartOptionsTwo = {
    chart: {
      type: 'bar',
      height: 280,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: { text: '$ (thousands)' }
    },
    fill: { opacity: 1 },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  };

  let columnChartSeriesThree = columnChartSeriesTwo;
  let columnChartOptionsThree = columnChartOptionsTwo;
  let columnChartSeriesFour = columnChartSeriesOne;
  let columnChartOptionsFour = columnChartOptionsOne;

  // Bar chart variations
  let barChartSeriesOne = barChartSeries;
  let barChartOptionsOne = barChartOptions;
  let barChartSeriesTwo = barChartSeries;
  let barChartOptionsTwo = barChartOptions;

  // Balance statistics
  let balanceStatisticsSeries = [
    {
      name: 'Word',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 70, 75, 80]
    },
    {
      name: 'Image', 
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 45, 50, 55]
    }
  ];

  let balanceStatisticsOptions = {
    chart: {
      type: 'bar',
      height: 250,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: {
      title: { text: 'Count' }
    },
    fill: { opacity: 1 },
    colors: ['#487FFF', '#FF9F29']
  };

  // Donut chart variations
  let donutChartSeriesTwo = donutChartSeries;
  let donutChartOptionsTwo = donutChartOptions;
  let basicDonutChartSeries = donutChartSeries;
  let basicDonutChartOptions = donutChartOptions;

  // Payment status variations
  let paymentStatusChartSeriesOne = paymentStatusChartSeries;
  let paymentStatusChartOptionsOne = paymentStatusChartOptions;
  let paymentStatusChartSeriesTwo = paymentStatusChartSeries;
  let paymentStatusChartOptionsTwo = paymentStatusChartOptions;
  let paymentStatusChartSeriesThree = paymentStatusChartSeries;
  let paymentStatusChartOptionsThree = paymentStatusChartOptions;

  // Line chart variations
  let defaultLineChartSeries = chartSeries;
  let defaultLineChartOptions = chartOptions;
  let doubleLineChartSeries = chartSeries;
  let doubleLineChartOptions = chartOptions;
  let gradientLineChartSeries = chartSeries;
  let gradientLineChartOptions = chartOptions;
  let stepLineChartSeries = chartSeries;
  let stepLineChartOptions = chartOptions;
  let zoomAbleLineChartSeries = chartSeries;
  let zoomAbleLineChartOptions = chartOptions;
  let multipleSeriesChartSeries = chartSeries;
  let multipleSeriesChartOptions = chartOptions;
  let lineDataLabelSeries = chartSeries;
  let lineDataLabelOptions = chartOptions;

  // Pie chart variations
  let pieChartSeriesOne = donutChartSeries;
  let pieChartOptionsTwo = donutChartOptions;

  // Statistics variations
  let statisticsDonutChartSeries = donutChartSeries;
  let statisticsDonutChartOptions = donutChartOptions;
  let statisticsDonutChartSeriesThree = donutChartSeries;
  let statisticsDonutChartOptionsThree = donutChartOptions;

  // Revenue variations
  let revenueChartSeriesOne = chartSeries;
  let revenueChartOptionsOne = chartOptions;
  let upDownBarChartSeries = barChartSeries;
  let upDownBarChartOptions = barChartOptions;

  // Enrollment variations
  let enrollmentChartSeries = chartSeries;
  let enrollmentChartOptions = chartOptions;

  // Income vs Expense
  let incomeExpenseSeries = paymentStatusChartSeries;
  let incomeExpenseOptions = paymentStatusChartOptions;

  // Radar chart
  let radarChartSeries = [{
    name: 'Series 1',
    data: [80, 50, 30, 40, 100, 20],
  }];
  let radarChartOptions = {
    chart: {
      height: 350,
      type: 'radar',
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June']
    }
  };

  // Time series variations
  let timeSeriesChartSeries = chartSeries;
  let timeSeriesChartOptions = chartOptions;
  let timeSeriesChartSeriesTwo = chartSeries;
  let timeSeriesChartOptionsTwo = chartOptions;

  // Transaction variations
  let transactionLineChartSeries = chartSeries;
  let transactionLineChartOptions = chartOptions;

  // User overview variations
  let userOverviewDonutChartSeries = donutChartSeries;
  let userOverviewDonutChartOptions = donutChartOptions;
  let userOverviewDonutChartSeriesOne = donutChartSeries;
  let userOverviewDonutChartOptionsOne = donutChartOptions;

  // Candlestick chart
  let candleStickChartSeries = [{
    data: [
      { x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] },
      { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
      { x: new Date(1538782200000), y: [6630.71, 6648.95, 6623.34, 6635.65] }
    ]
  }];
  let candleStickChartOptions = {
    chart: {
      type: 'candlestick',
      height: 350
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  };

  // Daily icon bar chart variations
  let dailyIconBarChartSeriesOne = barChartSeries;
  let dailyIconBarChartOptionsOne = barChartOptions;
  let dailyIconBarChartSeriesTwo = barChartSeries;
  let dailyIconBarChartOptionsTwo = barChartOptions;

  // Semi circle gauge
  let semiCircleGaugeSeriesOne = [75];
  let semiCircleGaugeOptionsOne = {
    chart: {
      type: 'radialBar',
      offsetY: -20,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: '97%',
          margin: 5,
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: -2,
            fontSize: '22px'
          }
        }
      }
    },
    grid: {
      padding: {
        top: -10
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91]
      },
    },
    labels: ['Average Results'],
  };

  // Create chart functions
  let createChartNine = (color) => createChart(color);
  let createChartTen = (color) => createChart(color);
  let createChatEleven = (color) => createChart(color);

  return {
    chartSeries,
    chartOptions,
    barChartSeries,
    barChartOptions,
    donutChartSeries,
    donutChartOptions,
    paymentStatusChartSeries,
    paymentStatusChartOptions,
    createChart,
    createChartTwo,
    createChartThree,
    createChartFour,
    createChartFive,
    createChartSix,
    createChartSeven,
    createChartEight,
    createChartNine,
    createChartTen,
    createChatEleven,
    // Column charts
    columnChartSeriesOne,
    columnChartOptionsOne,
    columnChartSeriesTwo,
    columnChartOptionsTwo,
    columnChartSeriesThree,
    columnChartOptionsThree,
    columnChartSeriesFour,
    columnChartOptionsFour,
    // Bar chart variations
    barChartSeriesOne,
    barChartOptionsOne,
    barChartSeriesTwo,
    barChartOptionsTwo,
    // Balance statistics
    balanceStatisticsSeries,
    balanceStatisticsOptions,
    // Donut variations
    donutChartSeriesTwo,
    donutChartOptionsTwo,
    basicDonutChartSeries,
    basicDonutChartOptions,
    // Payment status variations
    paymentStatusChartSeriesOne,
    paymentStatusChartOptionsOne,
    paymentStatusChartSeriesTwo,
    paymentStatusChartOptionsTwo,
    paymentStatusChartSeriesThree,
    paymentStatusChartOptionsThree,
    // Line chart variations
    defaultLineChartSeries,
    defaultLineChartOptions,
    doubleLineChartSeries,
    doubleLineChartOptions,
    gradientLineChartSeries,
    gradientLineChartOptions,
    stepLineChartSeries,
    stepLineChartOptions,
    zoomAbleLineChartSeries,
    zoomAbleLineChartOptions,
    multipleSeriesChartSeries,
    multipleSeriesChartOptions,
    lineDataLabelSeries,
    lineDataLabelOptions,
    // Pie chart variations
    pieChartSeriesOne,
    pieChartOptionsTwo,
    // Statistics variations
    statisticsDonutChartSeries,
    statisticsDonutChartOptions,
    statisticsDonutChartSeriesThree,
    statisticsDonutChartOptionsThree,
    // Revenue variations
    revenueChartSeriesOne,
    revenueChartOptionsOne,
    upDownBarChartSeries,
    upDownBarChartOptions,
    // Enrollment variations
    enrollmentChartSeries,
    enrollmentChartOptions,
    // Income vs Expense
    incomeExpenseSeries,
    incomeExpenseOptions,
    // Radar chart
    radarChartSeries,
    radarChartOptions,
    // Time series variations
    timeSeriesChartSeries,
    timeSeriesChartOptions,
    timeSeriesChartSeriesTwo,
    timeSeriesChartOptionsTwo,
    // Transaction variations
    transactionLineChartSeries,
    transactionLineChartOptions,
    // User overview variations
    userOverviewDonutChartSeries,
    userOverviewDonutChartOptions,
    userOverviewDonutChartSeriesOne,
    userOverviewDonutChartOptionsOne,
    // Candlestick chart
    candleStickChartSeries,
    candleStickChartOptions,
    // Daily icon bar chart variations
    dailyIconBarChartSeriesOne,
    dailyIconBarChartOptionsOne,
    dailyIconBarChartSeriesTwo,
    dailyIconBarChartOptionsTwo,
    // Semi circle gauge
    semiCircleGaugeSeriesOne,
    semiCircleGaugeOptionsOne,
  };
};

export default useReactApexChart;