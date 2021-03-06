Ember.TEMPLATES["javascripts/upgrade-header"] = Ember.HTMLBars.template({"id":null,"block":"{\"symbols\":[],\"statements\":[[1,[28,\"upgrade-notice\",null,[[\"versionCheck\"],[[24,[\"versionCheck\"]]]]],false],[0,\"\\n\"]],\"hasEval\":false}","meta":{"moduleName":"javascripts/upgrade-header"}});
define("discourse/plugins/docker_manager/discourse/components/upgrade-notice", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: "tr",
    href: function () {
      return Discourse.getURL("/admin/upgrade");
    }.property()
  });
});
Ember.TEMPLATES["javascripts/components/upgrade-notice"] = Ember.HTMLBars.template({"id":null,"block":"{\"symbols\":[],\"statements\":[[4,\"if\",[[24,[\"currentUser\",\"admin\"]]],null,{\"statements\":[[0,\"  \"],[7,\"th\",true],[10,\"colspan\",\"5\"],[8],[0,\"\\n\"],[4,\"if\",[[24,[\"versionCheck\",\"upToDate\"]]],null,{\"statements\":[[0,\"      \"],[7,\"a\",true],[11,\"href\",[29,[[22,\"href\"]]]],[10,\"data-auto-route\",\"true\"],[8],[1,[28,\"i18n\",[\"docker.link_to_upgrade\"],null],false],[9],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[1,[28,\"i18n\",[\"docker.upgrade\"],null],false],[0,\" \"],[7,\"a\",true],[11,\"href\",[29,[[22,\"href\"]]]],[10,\"data-auto-route\",\"true\"],[8],[1,[28,\"i18n\",[\"docker.perform_upgrade\"],null],false],[9],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[9],[0,\"\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}","meta":{"moduleName":"javascripts/discourse/templates/components/upgrade-notice"}});

