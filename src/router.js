import { createRouter, createWebHistory } from 'vue-router'
import TutorsDetails from './pages/tutors/TutorsDetails.vue'
import TutorsList from './pages/tutors/TutorsList.vue'
import TutorsRegister from './pages/tutors/TutorsRegister.vue'
import ContactTutors from './pages/requests/ContactTutors.vue'
import RequestRecieved from './pages/requests/RequestRecieved.vue'
import UserAuth from './pages/auth/UserAuth.vue'
import NotFound from './pages/NotFound.vue'
import store from './store/index.js'


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
            component: TutorsRegister,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/requests',
            component: RequestRecieved,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/auth',
            component: UserAuth,
            meta: {
                requiresUnAuth: true
            }
        },
        {
            path: '/:notFound(.*)',
            component: NotFound
        }
        
    ]
})

router.beforeEach(function(to, _, next){
    if(to.meta.requiresAuth && !store.getters.isAuthenticated){
        next('/auth')
    }else if(to.meta.requiresUnAuth && store.getters.isAuthenticated){
        next('/tutors')
    }else{
        next()
    }
})

export default router;