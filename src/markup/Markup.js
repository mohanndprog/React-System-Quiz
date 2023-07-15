import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ThemeButton from './Element/ThemeButton/ThemeButton';

import Homepage from './Pages/Homepage1';

import Aboutus1 from './Pages/Aboutus/Aboutus1';
 
import Error403 from './Pages/Error/Error403';
import Error404 from './Pages/Error/Error404';
import Error405 from './Pages/Error/Error405';
 

import UnderMaintenance from './Pages/UnderMaintenance';
// acount

import Account from './Pages/Account';
import Passwordchange from './Pages/Passwordchange';
import Exams from './Pages/Exams';
import ExamDetails from './Pages/ExamDetails';
import Questions from './Pages/Questions';

 


 
 
import Team from './Pages/Team';
 
import Login from './Pages/Login';
import Register from './Pages/Register';
import Contact from './Pages/Contact';
 
import ProtfolioFullWidth from './Pages/Protfolio/ProtfolioFullWidth';
 

 
import ShortIconBox from './Pages/ShortCode/ShortIconBox';
 

import ScrollToTop from './Element/ScrollToTop';

import Dashboard from './Pages/Admin/page/Dashboard';
import LoginAdmin from './Pages/Admin/page/Auth/LoginAdmin';



import ExamsAdmin from './Pages/Admin/page/Exam/ExamsAdmin';
import ExamAdd from './Pages/Admin/page/Exam/ExamAdd';
import ExamEdit from './Pages/Admin/page/Exam/ExamEdit';


import Category from './Pages/Admin/page/Categories/Category';
import CategoryAdd from './Pages/Admin/page/Categories/CategoryAdd';
import CategoryEdit from './Pages/Admin/page/Categories/CategoryEdit';


import Group from './Pages/Admin/page/Groups/Group';
import GroupAdd from './Pages/Admin/page/Groups/GroupAdd';
import GroupEdit from './Pages/Admin/page/Groups/GroupEdit';

import QuestionsShow from './Pages/Admin/page/Questions/QuestionsShow';
import QuestionsAdd from './Pages/Admin/page/Questions/QuestionsAdd';
import QuestionsEdit from './Pages/Admin/page/Questions/QuestionsEdit';


import UserShow from './Pages/Admin/page/Users/UserShow';
import UserAdd from './Pages/Admin/page/Users/UserAdd';
import UserEdit from './Pages/Admin/page/Users/UserEdit';



import Division from './Pages/Admin/page/Division/Division';
import DivisionAdd from './Pages/Admin/page/Division/DivisionAdd';
import DivisionEdit from './Pages/Admin/page/Division/DivisionEdit';


import ClassificationQuestions from './Pages/Admin/page/ClassificationQuestions/ClassificationQuestions';
import ClassificationQuestionsAdd from './Pages/Admin/page/ClassificationQuestions/ClassificationQuestionsAdd';
import ClassificationQuestionsEdit from './Pages/Admin/page/ClassificationQuestions/ClassificationQuestionsEdit';


import SocialSituations from './Pages/Admin/page/SocialSituations/SocialSituations';
import SocialSituationsAdd from './Pages/Admin/page/SocialSituations/SocialSituationsAdd';
import SocialSituationsEdit from './Pages/Admin/page/SocialSituations/SocialSituationsEdit';



import Moderators from './Pages/Admin/page/Moderators/Moderators';
import ModeratorsAdd from './Pages/Admin/page/Moderators/ModeratorsAdd';
import ModeratorsEdit from './Pages/Admin/page/Moderators/ModeratorsEdit';


import MemorizingQuran from './Pages/Admin/page/MemorizingQuran/MemorizingQuran';
import MemorizingQuranAdd from './Pages/Admin/page/MemorizingQuran/MemorizingQuranAdd';
import MemorizingQuranEdit from './Pages/Admin/page/MemorizingQuran/MemorizingQuranEdit';


import Qualifications from './Pages/Admin/page/Qualifications/Qualifications';
import QualificationsAdd from './Pages/Admin/page/Qualifications/QualificationsAdd';
import QualificationsEdit from './Pages/Admin/page/Qualifications/QualificationsEdit';
 






class Markup extends Component{
	render(){
		return(
			<BrowserRouter basename="/exam">
                <div className="page-wraper">
                    <Switch>
                        <Route path='/' exact component={Homepage} />
                     
                        <Route path='/about-1' exact component={Aboutus1} />
               
                        <Route path='/error-403' exact component={Error403} />
                        <Route path='/error-404' exact component={Error404} />
                        <Route path='/error-405' exact component={Error405} />
          

                        <Route path='/under-maintenance' exact component={UnderMaintenance} />
                        {/* // acount */}
                        <Route path='/exams' exact component={Exams} />
                        <Route path='/examDetails' exact component={ExamDetails} />
                        <Route path='/questions' exact component={Questions} />

                        <Route path='/account' exact component={Account} />
                        <Route path='/passwordchange' exact component={Passwordchange} />


                     
              
                        <Route path='/team' exact component={Team} />
                     
                        <Route path='/login' exact component={Login} />
                        <Route path='/register' exact component={Register} />
                        <Route path='/contact' exact component={Contact} />
            
                    
                  
                  
                        <Route path='/portfolio-full-width' exact component={ProtfolioFullWidth} />


                      
                         
						
                        <Route path='/short-icon-box' exact component={ShortIconBox} />
                        <Route path='/dashboard' exact component={Dashboard} />
                        <Route path='/dashboard/login' exact component={LoginAdmin} />
                        <Route path='/dashboard/examsadmin' exact component={ExamsAdmin} />
                        <Route path='/dashboard/examsadmin/examedd' exact component={ExamAdd} />
                        <Route path='/dashboard/examsadmin/examedit' exact component={ExamEdit} />
                        <Route path='/dashboard/category' exact component={Category} />
                        <Route path='/dashboard/category/categoryAdd' exact component={CategoryAdd} />
                        <Route path='/dashboard/category/categoryEdit' exact component={CategoryEdit} />
                        <Route path='/dashboard/group' exact component={Group} />
                        <Route path='/dashboard/group/groupadd' exact component={GroupAdd} />
                        <Route path='/dashboard/group/groupedit' exact component={GroupEdit} />

                        <Route path='/dashboard/questions' exact component={QuestionsShow} />
                        <Route path='/dashboard/questions/questionsadd' exact component={QuestionsAdd} />
                        <Route path='/dashboard/questions/questionsedit' exact component={QuestionsEdit} />


                        <Route path='/dashboard/users' exact component={UserShow} />
                        <Route path='/dashboard/users/userAdd' exact component={UserAdd} />
                        <Route path='/dashboard/users/useredit' exact component={UserEdit} />


                        <Route path='/dashboard/division' exact component={Division} />
                        <Route path='/dashboard/division/divisionadd' exact component={DivisionAdd} />
                        <Route path='/dashboard/division/divisionedit' exact component={DivisionEdit} />


                        <Route path='/dashboard/classificationquestions' exact component={ClassificationQuestions} />
                        <Route path='/dashboard/classificationQuestions/classificationquestionsadd' exact component={ClassificationQuestionsAdd} />
                        <Route path='/dashboard/classificationQuestions/classificationquestionsedit' exact component={ClassificationQuestionsEdit} />


                        <Route path='/dashboard/moderators' exact component={Moderators} />
                        <Route path='/dashboard/moderators/moderatorsadd' exact component={ModeratorsAdd} />
                        <Route path='/dashboard/moderators/moderatorsedit' exact component={ModeratorsEdit} />


                        <Route path='/dashboard/socialsituations' exact component={SocialSituations} />
                        <Route path='/dashboard/socialsituations/socialsituationsadd' exact component={SocialSituationsAdd} />
                        <Route path='/dashboard/socialsituations/socialsituationsedit' exact component={SocialSituationsEdit} />



                        <Route path='/dashboard/memorizingquran' exact component={MemorizingQuran} />
                        <Route path='/dashboard/memorizingquran/memorizingquranadd' exact component={MemorizingQuranAdd} />
                        <Route path='/dashboard/memorizingquran/memorizingquranedit' exact component={MemorizingQuranEdit} />


                        <Route path='/dashboard/qualifications' exact component={Qualifications} />
                        <Route path='/dashboard/qualifications/qualificationsadd' exact component={QualificationsAdd} />
                        <Route path='/dashboard/qualifications/qualificationsedit' exact component={QualificationsEdit} />

                        


                       
                    					
					</Switch>
                </div>
				<ScrollToTop />
				<ThemeButton />
            </BrowserRouter>	
		)
	}
	
}

export default Markup;