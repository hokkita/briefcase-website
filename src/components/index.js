import PageFooter from "./PageFooter.vue";
import TopNavigation from "./TopNavigation.vue";

function registerComponents(app) {
    app.component("page-footer", PageFooter);
    app.component("top-nav", TopNavigation);
}

export default {
    registerComponents
};