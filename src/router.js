import { createRouter, createWebHistory } from 'vue-router'
import TutorsDetails from './pages/tutors/TutorsDetails.vue'
import TutorsList from './pages/tutors/TutorsList.vue'
import TutorsRegister from './pages/tutors/TutorsRegister.vue'
import ContactTutors from './pages/requests/ContactTutors.vue'
import RequestRecieved from './pages/requests/RequestRecieved.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
           path: '/',
           redirect: '/tutors' 
        },
        {
            path: '/tutors',
            component: TutorsList
        },
        {
            path: '/tutors/:id',
            component: TutorsDetails,
            props: true,
            children: [
                {
                    path: 'contact',
                    component: ContactTutors
                }
            ]
        },
        {
            path: '/register',
            component: TutorsRegister
        },
        {
            path: '/requests',
            component: RequestRecieved
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
        
    ]
})

export default router;