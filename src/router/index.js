import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SearchView from '@/views/SearchView.vue'
import SearchResultView from '@/views/SearchResultView.vue'
import VideoDiscoverView from '@/views/VideoDiscoverView.vue'
import VideoOfficialView from '@/views/VideoOfficialView.vue'
import VideoFollowView from '@/views/VideoFollowView.vue'
import PublishView from '@/views/PublishView.vue'
import ContactView from '@/views/ContactView.vue'
import FavoritesView from '@/views/FavoritesView.vue'
import UserDetailView from '@/views/UserDetailView.vue'
import PracticeView from '@/views/PracticeView.vue'
import VideoPracticeView from '@/views/VideoPracticeView.vue'
import PracticeCompleteView from '@/views/PracticeCompleteView.vue'
import PracticeShareView from '@/views/PracticeShareView.vue'
import ShareSuccessView from '@/views/ShareSuccessView.vue'
import ProfileView from '@/views/ProfileView.vue'
import EditProfileView from '@/views/EditProfileView.vue'
import ActivityDetailView from '@/views/ActivityDetailView.vue'
import ChatView from '@/views/ChatView.vue'
import FavoriteSearchView from '@/views/FavoriteSearchView.vue'
import FavoriteSearchResultView from '@/views/FavoriteSearchResultView.vue'
import VideoDetailView from '@/views/VideoDetailView.vue'
import ActivityView from '@/views/ActivityView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/search', name: 'search', component: SearchView },
  { path: '/search-result', name: 'searchResult', component: SearchResultView },
  { path: '/video', name: 'video', component: VideoDiscoverView },
  { path: '/video-official', name: 'videoOfficial', component: VideoOfficialView },
  { path: '/video-follow', name: 'videoFollow', component: VideoFollowView },
  { path: '/publish', name: 'publish', component: PublishView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/favorites', name: 'favorites', component: FavoritesView },
  { path: '/user-detail', name: 'userDetail', component: UserDetailView },
  { path: '/practice', name: 'practice', component: PracticeView },
  { path: '/video-practice', name: 'videoPractice', component: VideoPracticeView },
  { path: '/practice-complete', name: 'practiceComplete', component: PracticeCompleteView },
  { path: '/practice-share', name: 'practiceShare', component: PracticeShareView },
  { path: '/share-success', name: 'shareSuccess', component: ShareSuccessView },
  { path: '/profile', name: 'profile', component: ProfileView },
  { path: '/edit-profile', name: 'editProfile', component: EditProfileView },
  { path: '/activity-detail', name: 'activityDetail', component: ActivityDetailView },
  { path: '/chat', name: 'chat', component: ChatView },
  { path: '/favorite-search', name: 'favoriteSearch', component: FavoriteSearchView },
  { path: '/favorite-search-result', name: 'favoriteSearchResult', component: FavoriteSearchResultView },
  { path: '/video-detail', name: 'videoDetail', component: VideoDetailView },
  { path: '/activity', name: 'activity', component: ActivityView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
