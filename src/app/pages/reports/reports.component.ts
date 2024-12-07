import { Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FinancialsPageComponent } from '../financials-page/financials-page.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent {

  constructor(private resolver: ComponentFactoryResolver) {}
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

  /**
   * Download data in the specified format (JSON or CSV)
   */
  downloadData(format: 'json' | 'csv'): void {
    if (format === 'json') {
      this.downloadAsJSON();
    } else if (format === 'csv') {
      this.downloadAsCSV();
    }
  }

  /**
   * Download the financials data as JSON.
   */
  private downloadAsJSON(): void {
    const blob = new Blob([JSON.stringify(this.financials, null, 2)], {
      type: 'application/json',
    });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'financials-report.json';
    anchor.click();
    window.URL.revokeObjectURL(url);
  }

  /**
   * Download the financials data as CSV.
   */
  private downloadAsCSV(): void {
    const csvData = this.convertToCSV();
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'financials-report.csv';
    anchor.click();
    window.URL.revokeObjectURL(url);
  }

  /**
   * Convert financials data to CSV format.
   */
  private convertToCSV(): string {
    const rows = [];
    rows.push('Key,Value');
    rows.push(`Total Revenue,${this.financials.totalRevenue}`);
    rows.push(`Net Profit,${this.financials.netProfit}`);
    rows.push(`Cash Flow,${this.financials.cashFlow}`);
    rows.push('\nRevenue Breakdown');
    rows.push('Source,Amount');
    this.financials.revenueSources.forEach((item) =>
      rows.push(`${item.source},${item.amount}`)
    );
    rows.push('\nExpense Breakdown');
    rows.push('Category,Amount');
    this.financials.expenseCategories.forEach((item) =>
      rows.push(`${item.category},${item.amount}`)
    );
    rows.push('\nMonthly Data');
    rows.push('Month,Revenue,Profit,Loss');
    this.financials.monthlyData.forEach((item) =>
      rows.push(`${item.month},${item.revenue},${item.profit},${item.loss}`)
    );
    return rows.join('\n');
  }

  /**
   * Capture the financials page and download it as a PDF.
   */

  @ViewChild('financialsContainer', { read: ViewContainerRef }) container!: ViewContainerRef; // Container for dynamic component
  private financialsComponentRef!: ComponentRef<FinancialsPageComponent>; // Reference to dynamically created component
  downloadAsPDF(): void {
    // Create the financials component dynamically
    const factory = this.resolver.resolveComponentFactory(FinancialsPageComponent);
    this.container.clear();
    this.financialsComponentRef = this.container.createComponent(factory);

    // Wait for the component to initialize and render
    setTimeout(() => {
      const element = this.financialsComponentRef.location.nativeElement;

      html2canvas(element).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pageWidth = pdf.internal.pageSize.getWidth();
        const imgHeight = (canvas.height * pageWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, imgHeight);
        pdf.save('financials-report.pdf');

        // Clean up the dynamically added component
        this.container.clear();
      });
    }, 100); // Adjust timeout if rendering takes longer
  }
}
