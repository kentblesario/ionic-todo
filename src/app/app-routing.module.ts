import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthguardsGuard } from './guards/authguards.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'add-todo',
    loadChildren: () => import('./modals/add-todo/add-todo.module').then( m => m.AddTodoPageModule)
  },
  {
    path: 'samplepage',
    loadChildren: () => import('./samplepage/samplepage.module').then( m => m.SamplepagePageModule),
    canActivate: [AuthguardsGuard],

  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
