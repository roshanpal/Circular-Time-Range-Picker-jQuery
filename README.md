# Circular Time Range Picker jQuery
Circular SVG based time range picker UI built with jQuery.

**Preview**

![alt text](https://raw.githubusercontent.com/roshanpal/Circular-Time-Range-Picker-jQuery/master/img/demo.gif)

**How to use?**

Include the circular.js in your project.

Use the following SVG in your DOM.
```html
<svg width="300" height="300" class="circle-datepicker">
    <circle cx="150" cy="150" r="100" stroke="#fff" fill="none" stroke-width="24" />
    <path
        class="circle-datepicker__path"
        stroke-linecap="round"
        stroke-width="24"
        fill="none"
        d=""
        style="stroke:rgba(109, 75, 255, 0.12);"
    />
    <circle class="circle-datepicker__start" cx="150" cy="150" r="12" fill="#6d4bff" />
    <circle class="circle-datepicker__end" cx="150" cy="150" r="12" fill="#6d4bff" />

    <g id="lines">
            <line x1="150" y1="40" x2="150" y2="50" transform="rotate(30 150 150)" style="stroke: #000;stroke-width:2px;stroke-linecap: round;"></line>
            <line x1="150" y1="40" x2="150" y2="50" transform="rotate(60 150 150)" style="stroke: #000;stroke-width:2px;stroke-linecap: round;"></line>
            <line x1="150" y1="40" x2="150" y2="50" transform="rotate(90 150 150)" style="stroke: #000;stroke-width:2px;stroke-linecap: round;"></line>
            <line x1="150" y1="40" x2="150" y2="50" transform="rotate(120 150 150)" style="stroke: #000;stroke-width:2px;stroke-linecap: round;"></line>
            <line x1="150" y1="40" x2="150" y2="50" transform="rotate(150 150 150)" style="stroke: #000;stroke-width:2px;stroke-linecap: round;"></line>
            <line x1="150" y1="40" x2="150" y2="50" transform="rotate(180 150 150)" style="stroke: #000;stroke-width:2px;stroke-linecap: round;"></line>
            <line x1="150" y1="40" x2="150" y2="50" transform="rotate(210 150 150)" style="stroke: #000;stroke-width:2px;stroke-linecap: round;"></line>
            <line x1="150" y1="40" x2="150" y2="50" transform="rotate(240 150 150)" style="stroke: #000;stroke-width:2px;stroke-linecap: round;"></line>
            <line x1="150" y1="40" x2="150" y2="50" transform="rotate(270 150 150)" style="stroke: #000;stroke-width:2px;stroke-linecap: round;"></line>
            <line x1="150" y1="40" x2="150" y2="50" transform="rotate(300 150 150)" style="stroke: #000;stroke-width:2px;stroke-linecap: round;"></line>
            <line x1="150" y1="40" x2="150" y2="50" transform="rotate(330 150 150)" style="stroke: #000;stroke-width:2px;stroke-linecap: round;"></line>
            <line x1="150" y1="40" x2="150" y2="50" transform="rotate(360 150 150)" style="stroke: #000;stroke-width:2px;stroke-linecap: round;"></line>

            <line x1="150" y1="40" x2="150" y2="45" transform="rotate(15 150 150)" style="stroke: #000;"></line>
            <line x1="150" y1="40" x2="150" y2="45" transform="rotate(45 150 150)" style="stroke: #000;"></line>
            <line x1="150" y1="40" x2="150" y2="45" transform="rotate(75 150 150)" style="stroke: #000;"></line>
            <line x1="150" y1="40" x2="150" y2="45" transform="rotate(105 150 150)" style="stroke: #000;"></line>
            <line x1="150" y1="40" x2="150" y2="45" transform="rotate(135 150 150)" style="stroke: #000;"></line>
            <line x1="150" y1="40" x2="150" y2="45" transform="rotate(165 150 150)" style="stroke: #000;"></line>
            <line x1="150" y1="40" x2="150" y2="45" transform="rotate(195 150 150)" style="stroke: #000;"></line>
            <line x1="150" y1="40" x2="150" y2="45" transform="rotate(225 150 150)" style="stroke: #000;"></line>
            <line x1="150" y1="40" x2="150" y2="45" transform="rotate(255 150 150)" style="stroke: #000;"></line>
            <line x1="150" y1="40" x2="150" y2="45" transform="rotate(285 150 150)" style="stroke: #000;"></line>
            <line x1="150" y1="40" x2="150" y2="45" transform="rotate(315 150 150)" style="stroke: #000;"></line>
            <line x1="150" y1="40" x2="150" y2="45" transform="rotate(345 150 150)" style="stroke: #000;"></line>
    </g>

</svg>
```

Initialize Circular time picker plugin

```javascript
$('.circle-datepicker').circle_datepicker({ });
```

Credits to [antejan](https://github.com/antejan/jquery-circle-datepicker). This plugin is an enhanced version of his jQuery circle picker.