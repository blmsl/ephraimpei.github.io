import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProjectsPage } from './projects.page';
import { ProjectList, ProjectItem, TechnologyIcon, IconLink } from '../../components';
import { TechnologiesTray } from '../../layouts';
import { ProjectService } from '../../services';

describe('ProjectsPage', () => {
  let component: ProjectsPage;
  let fixture: ComponentFixture<ProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectsPage,
        ProjectList,
        ProjectItem,
        TechnologyIcon,
        IconLink,
        TechnologiesTray,
      ],
      imports: [ RouterTestingModule ],
      providers: [ ProjectService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
