import BriefcaseText from "./BriefcaseText.vue";
import PageFooter from "./PageFooter.vue";
import TopNavigation from "./TopNavigation.vue";

function registerComponents(app) {
    app.component("briefcase-text", BriefcaseText);
    app.component("page-footer", PageFooter);
    app.component("top-nav", TopNavigation);
}

export default {
    registerComponents
};