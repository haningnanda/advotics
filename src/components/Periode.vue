<template>
  <div>
    <date-picker v-model="range" lang="en" range :shortcuts="shortcuts" type="date" format="DD MMMM YYYY"></date-picker>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css';

const today = new Date()
const yesterday = new Date(today)
const last7days = new Date(today)
const last30days = new Date(today)
const thismonth = new Date(today)

yesterday.setDate(yesterday.getDate()-1)
last7days.setDate(last7days.getDate()-7)
last30days.setDate(last30days.getDate()-30)
thismonth.setDate(1)

today.toDateString()
yesterday.toDateString()
last7days.toDateString()
last30days.toDateString()
thismonth.toDateString()

export default {
  name: 'Periode',
  components: {
    DatePicker
  },
  data() {
    return{
      date: '',
      range: '',
      shortcuts: [
        {
          text: 'Today',
          onClick: () => {
            this.range = [today, today]
          }
        },
        {
          text: 'Yesterday',
          onClick: () => {
            this.range = [yesterday, yesterday]
          }
        },
        {
          text: 'Last 7 days',
          onClick: () => {
            this.range = [last7days, yesterday]
          }
        },
        {
          text: 'Last 30 days',
          onClick: () => {
            this.range = [last30days, yesterday]
          }
        },
        {
          text: 'This Month',
          onClick: () => {
            this.range = [thismonth, today]
          }
        }
      ]
    }
  }
}
</script>

<style>
  .mx-calendar-content .cell.active, 
  .mx-calendar-content .cell.in-range,.mx-calendar-content .cell.hover-in-range{
    color: green;
    background-color:rgba(169, 208, 169, 0.552);
    font-weight: bold;
    border-radius: 20px;
  }

</style>