import { createRouter, createWebHistory } from "vue-router";
// main page header
import HomeView from "@/pages/HomeView.vue";
import StatisticsView from "@/pages/StatisticsView.vue";
import MainFilter from "@/pages/MainFilter/mainFilters.vue";
import AddMainFilter from "@/pages/MainFilter/AddMainFilter.vue";
import subFilter from "@/pages/subFilter/SubFilter.vue";
import subFilterAdd from "@/pages/subFilter/SubfilterAdd.vue";
import Sliders from "@/pages/Slider/TheSlider.vue";
import SliderAdd from "@/pages/Slider/SliderAdd.vue";
import Client from "@/pages/Clinets/TheClinet.vue";
import ClientAdd from "@/pages/Clinets/ClinetAdd.vue";
import couontries from "@/pages/Countries/TheCountries.vue";
import couontryAdd from "@/pages/Countries/CountryAdd.vue";
import City from "@/pages/Cites/TheCity.vue";
import CityAdd from "@/pages/Cites/CityAdd.vue";
import permissions from "@/pages/permissions/ThePermission.vue";
import permissionsAdd from "@/pages/permissions/PermissionAdd.vue";
import TheAdds from "@/pages/ads/TheAdds.vue";
import AddsAdd from "@/pages/ads/AddsAdd.vue";
import TheAdvertisement from "@/pages/advertisements/TheAdvertisements.vue";
import AdvertisementsAdd from "@/pages/advertisements/AdvertisementsAdd.vue";
import ThePackages from "@/pages/packages/ThePackages.vue";
import PackagesAdd from "@/pages/packages/PackagesAdd.vue";
import ThePromoCode from "@/pages/promoCode/ThePromoCode.vue";
import PromoCodeAdd from "@/pages/promoCode/PromoCodeAdd.vue";
import TheStatus from "@/pages/status/TheStatus.vue";
import StatusAdd from "@/pages/status/StatusAdd.vue";
import TheShipping from "@/pages/shipping/TheShipping.vue";
import ShippingAdd from "@/pages/shipping/ShippingAdd.vue";
import TheAdmins from "@/pages/admins/TheAdmins.vue";
import AdminsAdd from "@/pages/admins/AdminsAdd.vue";
import CommonQuestions from "@/pages/commonQuestions/CommonQuestions.vue";
import commonQuestionsAdd from "@/pages/commonQuestions/commonQuestionsAdd.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
      children: [
        { path: "", component: StatisticsView },
        { path: "/mainFilters", component: MainFilter },
        { path: "mainFilters/add", component: AddMainFilter },
        { path: "/supFilters", component: subFilter },
        { path: "supFilters/add", component: subFilterAdd },
        { path: "/sliders", component: Sliders },
        { path: "/sliders/add", component: SliderAdd },
        { path: "/clients", component: Client },
        { path: "clients/add", component: ClientAdd },
        { path: "/countries", component: couontries },
        { path: "countries/add", component: couontryAdd },
        { path: "/cities", component: City },
        { path: "cities/add", component: CityAdd },
        { path: "/permissions", component: permissions },
        { path: "permissions/add", component: permissionsAdd },
        { path: "/ades", component: TheAdds },
        { path: "ades/add", component: AddsAdd },
        { path: "/advertisements", component: TheAdvertisement },
        { path: "advertisements/add", component: AdvertisementsAdd },
        { path: "/packages", component: ThePackages },
        { path: "packages/add", component: PackagesAdd },
        { path: "/promoCode", component: ThePromoCode },
        { path: "promoCode/add", component: PromoCodeAdd },
        { path: "/status", component: TheStatus },
        { path: "status/add", component: StatusAdd },
        { path: "/shipping", component: TheShipping },
        { path: "shipping/add", component: ShippingAdd },
        { path: "/admins", component: TheAdmins },
        { path: "admins/add", component: AdminsAdd },
        { path: "/commonQuestions", component: CommonQuestions },
        { path: "commonQuestions/add", component: commonQuestionsAdd },
      ],
    },
  ],
  // linkActiveClass: "active",
  linkActiveClass: "active",

});

export default router;
