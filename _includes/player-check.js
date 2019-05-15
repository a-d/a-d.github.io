this.onload = null;
contentWindow.document.body.style.overflow='hidden';
contentWindow.document.body.style.cursor='pointer';
contentWindow.document.body.style.width='100%';
contentWindow.document.body.style.height='100%';
contentWindow.document.body.onclick = function() {
    if(confirm('Klicke auf [OK] um Inhalte von {{ include.name }} interaktiv nachzuladen. Hiermit bestätigst du die Datenschutzbestimmungen dieser Webseite und akzeptierst die Regeln zur Verarbeitung personenbezogener Daten.'))
        contentWindow.document.location.href='{{ include.url }}';
};
