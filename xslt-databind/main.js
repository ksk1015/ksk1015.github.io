/**
 * jsonをxmlに変換する
 * @param {*} json
 * @param {string} [rootName]
 * @param {string} [listItemName]
 * @returns {string}
 */
function json2xml(json, rootName, listItemName = 'item') {
  if (typeof json === 'string') {
    json = JSON.parse(json)
  }
  const xml = []
  xml.push('<?xml version="1.0" encoding="UTF-8"?>')
  if (rootName) {
    xml.push(`<${rootName}>`)
  }
  const parse = (n) => {
    if (Array.isArray(n)) {
      n.forEach((item) => {
        xml.push(`<${listItemName}>`)
        parse(item)
        xml.push(`</${listItemName}>`)
      })
    } else if (typeof n === 'object') {
      for (let key in n) {
        xml.push(`<${key}>`)
        parse(n[key])
        xml.push(`</${key}>`)
      }
    } else {
      xml.push(n)
    }
  }
  parse(json)
  if (rootName) {
    xml.push(`</${rootName}>`)
  }
  return xml.join('')
}

/**
 * xsl:template の中身をちゃんとしたXSLTにする
 * @param {string} xslTemplateContent
 * @returns {string}
 */
function getXslt(xslTemplateContent) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" />
  <xsl:template match="/">
    ${xslTemplateContent}
  </xsl:template>
</xsl:stylesheet>`
}

/**
 * データをXSLTテンプレートにバインドして DocumentFragment で返す
 * @param {*} data
 * @param {string} xsltTemplate
 * @returns {DocumentFragment}
 */
export function bindDataToXsltTemplate(data, xsltTemplate) {
  const xml = json2xml(data, 'data')
  const xslt = getXslt(xsltTemplate)

  const parser = new DOMParser()
  const xsltProcessor = new XSLTProcessor()

  const xmlDom = parser.parseFromString(xml, 'text/xml')
  const xsltDom = parser.parseFromString(xslt, 'text/xml')

  xsltProcessor.importStylesheet(xsltDom)
  const fragment = xsltProcessor.transformToFragment(xmlDom, xsltDom)
  return fragment
}
