import Vue from 'vue'

// This plugin file will load global components
import AppButton from '@/components/UI/AppButton'
import AppControlInput from '@/components/UI/AppControlInput'
import PostList from '@/components/Posts/PostList'

Vue.component('AppButton', AppButton)
// <<< This will make AppButton a global component that we don't need to import and register in every page
Vue.component('AppControlInput', AppControlInput)
Vue.component('PostList', PostList)