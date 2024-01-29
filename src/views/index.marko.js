// Compiled using marko@4.28.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/node-app$1.0.0/src/views/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Loja de Livros</title><link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css> <link href=css/estilos.css rel=stylesheet type=text/css media=all></head><body><nav class=\"navbar navbar-inverse\"><div class=navbar-header><a class=navbar-brand href=#>Alura Books</a></div></nav><div class=\"container page-wrap\"><div class=row> ");

  var $for$0 = 0;

  marko_forOf(data.books, function(book) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<div class=\"col-md-3 col-sm-6 hero-feature text-center\"><div class=thumbnail><img" +
      marko_attr("src", "images/" + (book.cover == null ? "" : book.cover)) +
      " alt><div class=caption><h3>" +
      marko_escapeXml(book.name) +
      "</h3><p>" +
      marko_escapeXml(book.description) +
      "</p><p>" +
      marko_escapeXml(book.price) +
      "</p><p><a href=# class=\"btn btn-primary\">Comprar!</a><a href=# class=\"btn btn-default\">Detalhes</a></p></div></div></div>");
  });

  out.w(" </div> </div><footer class=site-footer><p>Todos os direitos reservados</p></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "25");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/node-app$1.0.0/src/views/index.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
