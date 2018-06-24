(function ($, window, document) {
    var pluginName = 'circle_datepicker';
  
    var defaults = {
      start: 12,
      end: 3,
      step: 30,
      width: 300,
      height: 300,
      step_mins: 30
    };
  
    function polar_to_cartesian (cx, cy, radius, angle) {
      var radians;
      radians = (angle - 90) * Math.PI / 180.0;
      return [Math.round((cx + (radius * Math.cos(radians))) * 100) / 100, Math.round((cy + (radius * Math.sin(radians))) * 100) / 100];
    };
  
    function svg_arc_path (x, y, radius, range) {
      var end_xy, start_xy, long;
      start_xy = polar_to_cartesian(x, y, radius, range[1]);
      end_xy = polar_to_cartesian(x, y, radius, range[0]);
      long = range[1] - range[0] >= 180 ? 1 : 0;
      return "M " + start_xy[0] + " " + start_xy[1] + " A " + radius + " " + radius + " 0 " + long + " 0 " + end_xy[0] + " " + end_xy[1];
    };
  
    function angle_from_point (width, height, x, y) {
      return -Math.atan2(width/2-x, height/2-y) * 180 / Math.PI;
    }
  
    function time_to_angle (time) {
      return (time - 6) * 360 / 12 - 180;
    };
  
    function timerange_to_angle (timeRange) {
      return [time_to_angle(timeRange[0]), time_to_angle(timeRange[1])];
    }
  
    function angle_to_time (angle, step_mins) {
      return 6 + Math.floor((180+angle)*12/360*(60/step_mins))/(60/step_mins);
    };
  
  
    CircleDatepicker = function (element, options) {
      this.$el = $(element);
      this.options = $.extend({}, defaults, options);
      this.$path = this.options.path_el ? $(this.options.path_el) : this.$el.find('.circle-datepicker__path');
      this.$start = this.options.start_el ? $(this.options.start_el) : this.$el.find('.circle-datepicker__start');
      this.$end = this.options.end_el ? $(this.options.end_el) : this.$el.find('.circle-datepicker__end');
      this.value = timerange_to_angle([this.options.start, this.options.end]);
      this.pressed = null;
      this.oldValues = [];
      this.angle;
      this.init();
    }
  
    CircleDatepicker.prototype.init = function () {
      var _this = this;
      
      this.draw();
  
      ['path', 'start', 'end'].forEach(function(el){
        $(_this['$'+el]).on('mousedown', function(e){
          this.elMouseDown(e, el)
        }.bind(_this));
      })
  
      $(document).on('mouseup', function(){
        _this.pressed = null;
      });
  
      $(document).on('mousemove', _this.docMouseMove.bind(_this));
    }
  
    CircleDatepicker.prototype.elMouseDown = function (e, el) {
      this.angle = angle_from_point(this.options.width, this.options.height, e.pageX - this.$el.offset().left, e.pageY - this.$el.offset().top)
      this.oldValues = [this.value[0], this.value[1]];
      this.pressed = el;
    }
  
    CircleDatepicker.prototype.docMouseMove = function (e) {
      if (this.pressed) {
        var diff = this.angle - angle_from_point(this.options.width, this.options.height, e.pageX - this.$el.offset().left, e.pageY - this.$el.offset().top);
  
        if (this.pressed == 'path') {
          this.value = [this.oldValues[0] - diff, this.oldValues[1] - diff];
        } else if (this.pressed == 'start') {
          if (this.oldValues[0]-diff > this.oldValues[1]) {
            diff = diff + 360;
          }
          this.value[0] = this.oldValues[0] - diff;
        } else if (this.pressed == 'end') {
          if (this.oldValues[1] - diff < this.oldValues[0]) {
            diff = diff - 360;
          }
          this.value[1] = this.oldValues[1] - diff;
        }
  
        this.value[0] = this.value[0] % 360;
        this.value[1] = this.value[1] % 360;
  
        var _this = this;
        requestAnimationFrame(function(){
          _this.draw.bind(_this)();
          _this.trigger.bind(_this)();
        })
      }
    }
  
    CircleDatepicker.prototype.drawCircle = function (el, angle) {
      el.setAttribute('cx', polar_to_cartesian(150, 150, 100, angle)[0]);
      el.setAttribute('cy', polar_to_cartesian(150, 150, 100, angle)[1]);
    }
  
    CircleDatepicker.prototype.draw = function () {
      this.$path.get(0).setAttribute('d', svg_arc_path(150, 150, 100, this.value));
      this.drawCircle(this.$start.get(0), this.value[0])
      this.drawCircle(this.$end.get(0), this.value[1])
    }
  
    CircleDatepicker.prototype.trigger = function () {
      this.$el.trigger('change', [[angle_to_time(this.value[0], this.options.step_mins), angle_to_time(this.value[1], this.options.step_mins)]]);
    }
  
  
    $.fn[pluginName] = function (options) {
      return this.each(function () {
        // if (!$.data(this, "plugin_#{pluginName}")) {
          $.data(this, "plugin_#{pluginName}", new CircleDatepicker(this, options));
        // }
      });
    }
  })(jQuery, window, document);
  