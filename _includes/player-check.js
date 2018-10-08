this.onload = null;
contentWindow.document.body.style.cursor='pointer';
contentWindow.document.body.onclick = function() {
    confirm('Klicke auf [OK] um Inhalte von {{ include.name }} interaktiv nachzuladen. Hiermit bestätigst du die Datenschutzbestimmungen dieser Webseite und akzeptierst die Regeln zur Verarbeitung personenbezogener Daten.')
    && (contentWindow.document.location.href='{{ include.url }}')
};