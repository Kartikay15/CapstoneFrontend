import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-financials',
  templateUrl: './financials-page.component.html',
  imports: [CommonModule, ChartModule],
  styleUrls: ['./financials-page.component.css'],
})
export class FinancialsPageComponent implements OnInit {
  financials = {
    totalRevenue: 500000,
    netProfit: 150000,
    cashFlow: 20000,
    revenueSources: [
      { source: 'Product Sales', amount: 300000 },
      { source: 'Service Revenue', amount: 150000 },
      { source: 'Other', amount: 50000 },
    ],
    expenseCategories: [
      { category: 'Salaries', amount: 200000 },
      { category: 'Marketing', amount: 100000 },
      { category: 'Other', amount: 50000 },
    ],
    monthlyData: [
      { month: 'January', revenue: 40000, profit: 15000, loss: 5000 },
      { month: 'February', revenue: 45000, profit: 20000, loss: 3000 },
      { month: 'March', revenue: 50000, profit: 25000, loss: 2000 },
    ],
  };

  revenueBreakdownChart: any;
  expenseBreakdownChart: any;
  financialTrendsChart: any;
  chartOptions: any;

  ngOnInit(): void {
    this.initializeCharts();
  }

  initializeCharts(): void {
    // Revenue Breakdown Chart Data
    this.revenueBreakdownChart = {
      labels: this.financials.revenueSources.map((item) => item.source),
      datasets: [
        {
          data: this.financials.revenueSources.map((item) => item.amount),
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
          hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D'],
        },
      ],
    };

    // Expense Breakdown Chart Data
    this.expenseBreakdownChart = {
      labels: this.financials.expenseCategories.map((item) => item.category),
      datasets: [
        {
          data: this.financials.expenseCategories.map((item) => item.amount),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF7392', '#42B4F5', '#FFE083'],
        },
      ],
    };

    // Financial Trends Chart Data
    const months = this.financials.monthlyData.map((data) => data.month);
    const revenues = this.financials.monthlyData.map((data) => data.revenue);
    const profits = this.financials.monthlyData.map((data) => data.profit);
    const losses = this.financials.monthlyData.map((data) => data.loss);

    this.financialTrendsChart = {
      labels: months,
      datasets: [
        {
          label: 'Revenue',
          data: revenues,
          borderColor: '#42A5F5',
          fill: false,
        },
        {
          label: 'Profit',
          data: profits,
          borderColor: '#66BB6A',
          fill: false,
        },
        {
          label: 'Loss',
          data: losses,
          borderColor: '#FFA726',
          fill: false,
        },
      ],
    };

    // Chart Options
    this.chartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
      },
    };
  }
}
