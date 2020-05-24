<template>
  <div class='empty-chart'>
    <svg width="600" height="400"></svg>
  </div>
</template>

<script>
import * as d3 from 'd3';
export default {
  components: {},
  data () {
    return {
    };
  },
  created () {
  },
  mounted () {
    this.initAxis();
  },
  methods: {
    initAxis () {
      let marge = { top: 50, bottom: 50, left: 50, right: 50 };
      let svg = d3.select('svg');
      let width = svg.attr('width');
      let height = svg.attr('height');
      let g = svg.append('g')
        .attr('transform', 'translate(50,50)');
      let dataset = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

      let xScale = d3.scaleBand()
        .domain(d3.range(dataset.length))
        .rangeRound([1, width - marge.left - marge.right]);
      let xAxis = d3.axisBottom(xScale);

      let yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([height - marge.top - marge.bottom, 1]);
      let yAxis = d3.axisLeft(yScale);

      g.append('g')
        .attr('transform', 'translate(' + 0 + ',' + (height - marge.top - marge.bottom) + ')')
        .call(xAxis);

      let gs = g.selectAll('g');

      gs.select('text');
      // .attr('opacity', 0);

      gs.select('line');
      // .attr('opacity', 0);

      gs.append('line')
        .attr('y', 0)
        .attr('opacity', 0.1)
        .attr('y2', -height + (marge.top + marge.bottom))
        .attr('stroke', 'black');

      g.append('g')
        .attr('transform', 'translate(0,0)')
        .call(yAxis)
        .selectAll('g')
        .append('line')
        .attr('x', 0)
        .attr('opacity', 0.1)
        .attr('x2', width - marge.left - marge.right)
        .attr('stroke', 'black')
        .selectAll('text')
        .text((d) => {
          return `${d}%`;
        });
      g.append('text')
        .attr('x', function (d, i) {
          return xScale(i);
        })
        .attr('y', function (d) {
          return yScale(d);
        });
    }
  }
};
</script>
<style lang='scss' scoped>
</style>
