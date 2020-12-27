import Vue from "vue";
import {
    Pagination,
    Dialog,
    MessageBox,
    Notification,
    Message
} from "element-ui";

Vue.use(Pagination);
Vue.use(Dialog);
// 按需引入 element ui 弹窗 插件
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;