import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ExecPageComponent } from './pages/exec-page/exec-page.component';
import { Component } from '@angular/core';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminExecutiveOnboardComponent } from './components/admin-executive-onboard/admin-executive-onboard.component';
import { AdminExecutiveManageComponent } from './components/admin-executive-manage/admin-executive-manage.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EvaluationsComponent } from './components/evaluations/evaluations.component';
import { ExpertComponent } from './components/expert/expert.component';
import { KpiPageComponent } from './pages/kpi-page/kpi-page.component';
import { ComplainsComponent } from './pages/complains/complains.component';
import { FinancialsPageComponent } from './pages/financials-page/financials-page.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { CarListingsComponent } from './pages/car-listings/car-listings.component';
import { AuthGuardService } from './service/auth-guard.service';
import { SellerComponent } from './pages/seller/seller.component';
import { ExpertPageComponent } from './pages/expert-page/expert-page.component';


export const routes: Routes = [
    {
        path: '', component: LoginComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'exec', component : ExecPageComponent
    },
    {
        path: 'main', component : MainPageComponent, canActivate: [AuthGuardService], children: [
            {
                path:'dash', component : DashboardComponent
            },
            {
                path:'eval', component : EvaluationsComponent
            },
            {
                path:'expert', component : ExpertComponent
            },
            {
                path:'kpi', component : KpiPageComponent
            },
            {
                path:'complain', component : ComplainsComponent
            }, 
            {
                path:'financial', component : FinancialsPageComponent
            },
            {
                path:'reports', component : ReportsComponent
            },
            {
                path:'listings', component : CarListingsComponent
            }
        ]
    },
    {
        path: 'sign-up', component : SignupComponent
    },
    
    {
        path:'admin', component : AdminPageComponent, canActivate: [AuthGuardService], children: [
            {
                path:'onboard-executive', component : AdminExecutiveOnboardComponent
            },
            {
                path:'manage-executive', component : AdminExecutiveManageComponent
            }
        ]
    },
    {
        path:'seller', component: SellerComponent, canActivate: [AuthGuardService]
    },
    {
        path:'expert', component: ExpertPageComponent, canActivate: [AuthGuardService]
    }
    
];
