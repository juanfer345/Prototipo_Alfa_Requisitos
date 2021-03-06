function inicializarPagina() {

    controladorDatosLocal();

    // Añadiendo los escuchadores cada relación dinámica (2 por cada una pa q se le pueda dar click al texto y al "rectangulo")
    document.getElementById("loginProfesor").addEventListener("click", () => { formularioLogin(event, "Profesor") })
    document.getElementById("loginProfesorText").addEventListener("click", () => { formularioLogin(event, "Profesor") })

    document.getElementById("loginEstudiante").addEventListener("click", () => { formularioLogin(event, "Estudiante") })
    document.getElementById("loginEstudianteText").addEventListener("click", () => { formularioLogin(event, "Estudiante") })

    document.getElementById("loginRepresentante").addEventListener("click", () => { formularioLogin(event, "Representante") })
    document.getElementById("loginRepresentanteText").addEventListener("click", () => { formularioLogin(event, "Representante") })

    document.getElementById("loginAdministrador").addEventListener("click", () => { formularioLogin(event, "Administrador") })
    document.getElementById("loginAdministradorText").addEventListener("click", () => { formularioLogin(event, "Administrador") })

    document.getElementById("registraProfesor").addEventListener("click", formularioRegistraProfesor)
    document.getElementById("registraProfesorText").addEventListener("click", formularioRegistraProfesor)
    document.getElementById("registraProfesor").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Registra Profesor", "Relaciones") });
    document.getElementById("registraProfesorText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Registra Profesor", "Relaciones") });

    document.getElementById("registraEstudiante").addEventListener("click", formularioRegistraEstudiante)
    document.getElementById("registraEstudianteText").addEventListener("click", formularioRegistraEstudiante)
    document.getElementById("registraEstudiante").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Registra Estudiante", "Relaciones") });
    document.getElementById("registraEstudianteText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Registra Estudiante", "Relaciones") });

    document.getElementById("registraSemestre").addEventListener("click", formularioRegistraSemestre)
    document.getElementById("registraSemestreText").addEventListener("click", formularioRegistraSemestre)
    document.getElementById("registraSemestre").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Registra Semestre", "Relaciones") });
    document.getElementById("registraSemestreText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Registra Semestre", "Relaciones") });

    document.getElementById("diseñaAsignatura").addEventListener("click", formularioDisenaAsignatura)
    document.getElementById("diseñaAsignaturaText").addEventListener("click", formularioDisenaAsignatura)
    document.getElementById("diseñaAsignatura").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Diseña Asignatura", "Relaciones") });
    document.getElementById("diseñaAsignaturaText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Diseña Asignatura", "Relaciones") });

    document.getElementById("diseñaClase").addEventListener("click", formularioDisenaClase)
    document.getElementById("diseñaClaseText").addEventListener("click", formularioDisenaClase)
    document.getElementById("diseñaClase").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Diseña Clase", "Relaciones") });
    document.getElementById("diseñaClaseText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Diseña Clase", "Relaciones") });

    document.getElementById("defineCriterio").addEventListener("click", formularioDefineCriterioEvaluacion)
    document.getElementById("defineCriterioText").addEventListener("click", formularioDefineCriterioEvaluacion)
    document.getElementById("defineCriterio").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Define Criterio de Evaluacion", "Relaciones") });
    document.getElementById("defineCriterioText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Define Criterio de Evaluacion", "Relaciones") });

    document.getElementById("registraEmpresa").addEventListener("click", formularioRegistraEmpresa)
    document.getElementById("registraEmpresaText").addEventListener("click", formularioRegistraEmpresa)
    document.getElementById("registraEmpresa").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Registra Empresa", "Relaciones") });
    document.getElementById("registraEmpresaText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Registra Empresa", "Relaciones") });

    document.getElementById("defineProblema").addEventListener("click", formularioDefineProblema)
    document.getElementById("defineProblemaText").addEventListener("click", formularioDefineProblema)
    document.getElementById("defineProblema").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Define Problema", "Relaciones") });
    document.getElementById("defineProblemaText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Define Problema", "Relaciones") });

    document.getElementById("validaProblema").addEventListener("click", formularioValidaProblema)
    document.getElementById("validaProblemaText").addEventListener("click", formularioValidaProblema)
    document.getElementById("validaProblema").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Valida Problema", "Relaciones") });
    document.getElementById("validaProblemaText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Valida Problema", "Relaciones") });

    document.getElementById("construyeCartera").addEventListener("click", formularioConstruyeCartera)
    document.getElementById("construyeCarteraText").addEventListener("click", formularioConstruyeCartera)
    document.getElementById("construyeCartera").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Construye Cartera", "Relaciones") });
    document.getElementById("construyeCarteraText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Construye Cartera", "Relaciones") });

    document.getElementById("registraHistoria").addEventListener("click", formularioRegistraHistoria)
    document.getElementById("registraHistoriatext").addEventListener("click", formularioRegistraHistoria)
    document.getElementById("registraHistoria").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Registra Historia Academica", "Relaciones") });
    document.getElementById("registraHistoriatext").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Registra Historia Academica", "Relaciones") });

    document.getElementById("conformaEquipo").addEventListener("click", formularioConformaEquipo)
    document.getElementById("conformaEquipoText").addEventListener("click", formularioConformaEquipo)
    document.getElementById("conformaEquipo").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Conforma Equipo", "Relaciones") });
    document.getElementById("conformaEquipoText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Conforma Equipo", "Relaciones") });

    document.getElementById("defineMetodologia").addEventListener("click", formularioDefineMetodologia)
    document.getElementById("defineMetodologiaText").addEventListener("click", formularioDefineMetodologia)
    document.getElementById("defineMetodologia").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Define Metodologia", "Relaciones") });
    document.getElementById("defineMetodologiaText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Define Metodologia", "Relaciones") });

    document.getElementById("entregaInformeInicial").addEventListener("click", () => { formularioEntregaInformePrototipo(event, "Informe Inicial") })
    document.getElementById("entregaInformeInicialText").addEventListener("click", () => { formularioEntregaInformePrototipo(event, "Informe Inicial") })
    document.getElementById("entregaInformeInicial").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Entrega Informe Inicial", "Relaciones") });
    document.getElementById("entregaInformeInicialText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Entrega Informe Inicial", "Relaciones") });

    document.getElementById("calificaInformeInicial").addEventListener("click", () => { formularioCalificaInformePrototipo(event, "Informe Inicial") })
    document.getElementById("calificaInformeInicialText").addEventListener("click", () => { formularioCalificaInformePrototipo(event, "Informe Inicial") })
    document.getElementById("calificaInformeInicial").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Califica Informe Inicial", "Relaciones") });
    document.getElementById("calificaInformeInicialText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Califica Informe Inicial", "Relaciones") });

    document.getElementById("entregaInformeProgreso").addEventListener("click", () => { formularioEntregaInformePrototipo(event, "Informe de Progreso") })
    document.getElementById("entregaInformeProgresoText").addEventListener("click", () => { formularioEntregaInformePrototipo(event, "Informe de Progreso") })
    document.getElementById("entregaInformeProgreso").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Entrega Informe de Progreso", "Relaciones") });
    document.getElementById("entregaInformeProgresoText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Entrega Informe de Progreso", "Relaciones") });

    document.getElementById("calificaInformeProgreso").addEventListener("click", () => { formularioCalificaInformePrototipo(event, "Informe de Progreso") })
    document.getElementById("calificaInformeProgresoText").addEventListener("click", () => { formularioCalificaInformePrototipo(event, "Informe de Progreso") })
    document.getElementById("calificaInformeProgreso").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Califica Informe de Progreso", "Relaciones") });
    document.getElementById("calificaInformeProgresoText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Califica Informe de Progreso", "Relaciones") });

    document.getElementById("entregaPrototipoAlpha").addEventListener("click", () => { formularioEntregaInformePrototipo(event, "Prototipo Alpha") })
    document.getElementById("entregaPrototipoAlphaText").addEventListener("click", () => { formularioEntregaInformePrototipo(event, "Prototipo Alpha") })
    document.getElementById("entregaPrototipoAlpha").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Entrega Prototipo Alpha", "Relaciones") });
    document.getElementById("entregaPrototipoAlphaText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Entrega Prototipo Alpha", "Relaciones") });

    document.getElementById("calificaPrototipoAlpha").addEventListener("click", () => { formularioCalificaInformePrototipo(event, "Prototipo Alpha") })
    document.getElementById("calificaPrototipoAlphaText").addEventListener("click", () => { formularioCalificaInformePrototipo(event, "Prototipo Alpha") })
    document.getElementById("calificaPrototipoAlpha").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Califica Prototipo Alpha", "Relaciones") });
    document.getElementById("calificaPrototipoAlphaText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Califica Prototipo Alpha", "Relaciones") });

    document.getElementById("realizaRetroalimentacion").addEventListener("click", formularioRealizaRetroalimentacion)
    document.getElementById("realizaRetroalimentacionText").addEventListener("click", formularioRealizaRetroalimentacion)
    document.getElementById("realizaRetroalimentacion").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Realiza Retroalimentacion", "Relaciones") });
    document.getElementById("realizaRetroalimentacionText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Realiza Retroalimentacion", "Relaciones") });

    document.getElementById("entregaInformeFinal").addEventListener("click", () => { formularioEntregaInformePrototipo(event, "Informe Final") })
    document.getElementById("entregaInformeFinalText").addEventListener("click", () => { formularioEntregaInformePrototipo(event, "Informe Final") })
    document.getElementById("entregaInformeFinal").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Entrega Informe Final", "Relaciones") });
    document.getElementById("entregaInformeFinalText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Entrega Informe Final", "Relaciones") });

    document.getElementById("calificaInformeFinal").addEventListener("click", () => { formularioCalificaInformePrototipo(event, "Informe Final") })
    document.getElementById("calificaInformeFinalText").addEventListener("click", () => { formularioCalificaInformePrototipo(event, "Informe Final") })
    document.getElementById("calificaInformeFinal").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Califica Informe Final", "Relaciones") });
    document.getElementById("calificaInformeFinalText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Califica Informe Final", "Relaciones") });

    document.getElementById("entregaPrototipoBeta").addEventListener("click", () => { formularioEntregaInformePrototipo(event, "Prototipo Beta") })
    document.getElementById("entregaPrototipoBetaText").addEventListener("click", () => { formularioEntregaInformePrototipo(event, "Prototipo Beta") })
    document.getElementById("entregaPrototipoBeta").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Entrega Prototipo Beta", "Relaciones") });
    document.getElementById("entregaPrototipoBetaText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Entrega Prototipo Beta", "Relaciones") });

    document.getElementById("calificaPrototipoBeta").addEventListener("click", () => { formularioCalificaInformePrototipo(event, "Prototipo Beta") })
    document.getElementById("calificaPrototipoBetaText").addEventListener("click", () => { formularioCalificaInformePrototipo(event, "Prototipo Beta") })
    document.getElementById("calificaPrototipoBeta").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Califica Prototipo Beta", "Relaciones") });
    document.getElementById("calificaPrototipoBetaText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Califica Prototipo Beta", "Relaciones") });

    document.getElementById("revisaPrototipoBeta").addEventListener("click", formularioRealizaRevision);
    document.getElementById("revisaPrototipoBetaText").addEventListener("click", formularioRealizaRevision);
    document.getElementById("revisaPrototipoBeta").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Revisa Prototipo Beta", "Relaciones") });
    document.getElementById("revisaPrototipoBetaText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Revisa Prototipo Beta", "Relaciones") });

    // Eventos
    document.getElementById("elipseProfeAparece").addEventListener("click", eventoProfesorAparece);
    document.getElementById("relaGrandeProfeAparece").addEventListener("click", eventoProfesorAparece);
    document.getElementById("relaPequeProfeAparece").addEventListener("click", eventoProfesorAparece);
    document.getElementById("relaProfeAparece").addEventListener("click", eventoProfesorAparece);
    document.getElementById("flechaProfeAparece").addEventListener("click", eventoProfesorAparece);
    document.getElementById("profeAparece").addEventListener("click", eventoProfesorAparece);
    document.getElementById("profeApareceText").addEventListener("click", eventoProfesorAparece);
    document.getElementById("elipseProfeAparece").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Profesor Aparece", "Eventos") });
    document.getElementById("relaGrandeProfeAparece").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Profesor Aparece", "Eventos") });
    document.getElementById("relaPequeProfeAparece").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Profesor Aparece", "Eventos") });
    document.getElementById("relaProfeAparece").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Profesor Aparece", "Eventos") });
    document.getElementById("flechaProfeAparece").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Profesor Aparece", "Eventos") });
    document.getElementById("profeAparece").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Profesor Aparece", "Eventos") });
    document.getElementById("profeApareceText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Profesor Aparece", "Eventos") });

    document.getElementById("elipseAsignaturaInicia").addEventListener("click", eventoAsignaturaInicia);
    document.getElementById("relaGrandeAsignaturaInicia").addEventListener("click", eventoAsignaturaInicia);
    document.getElementById("relaPequeAsignaturaInicia").addEventListener("click", eventoAsignaturaInicia);
    document.getElementById("relaAsignaturaInicia").addEventListener("click", eventoAsignaturaInicia);
    document.getElementById("flechaAsignaturaInicia").addEventListener("click", eventoAsignaturaInicia);
    document.getElementById("asignaturaInicia").addEventListener("click", eventoAsignaturaInicia);
    document.getElementById("asignaturaIniciaText").addEventListener("click", eventoAsignaturaInicia);
    document.getElementById("elipseAsignaturaInicia").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Asignatura Inicia", "Eventos") });
    document.getElementById("relaGrandeAsignaturaInicia").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Asignatura Inicia", "Eventos") });
    document.getElementById("relaPequeAsignaturaInicia").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Asignatura Inicia", "Eventos") });
    document.getElementById("relaAsignaturaInicia").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Asignatura Inicia", "Eventos") });
    document.getElementById("flechaAsignaturaInicia").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Asignatura Inicia", "Eventos") });
    document.getElementById("asignaturaInicia").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Asignatura Inicia", "Eventos") });
    document.getElementById("asignaturaIniciaText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Asignatura Inicia", "Eventos") });

    document.getElementById("elipseRepreAparece").addEventListener("click", eventoRepresentanteAparece);
    document.getElementById("relaGrandeRepreAparece").addEventListener("click", eventoRepresentanteAparece);
    document.getElementById("relaPequeRepreAparece").addEventListener("click", eventoRepresentanteAparece);
    document.getElementById("relaRepreAparece").addEventListener("click", eventoRepresentanteAparece);
    document.getElementById("flecharepreAparece").addEventListener("click", eventoRepresentanteAparece);
    document.getElementById("repreAparece").addEventListener("click", eventoRepresentanteAparece);
    document.getElementById("repreApareceText").addEventListener("click", eventoRepresentanteAparece);
    document.getElementById("elipseRepreAparece").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Representante Aparece", "Eventos") });
    document.getElementById("relaGrandeRepreAparece").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Representante Aparece", "Eventos") });
    document.getElementById("relaPequeRepreAparece").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Representante Aparece", "Eventos") });
    document.getElementById("relaRepreAparece").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Representante Aparece", "Eventos") });
    document.getElementById("flecharepreAparece").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Representante Aparece", "Eventos") });
    document.getElementById("repreAparece").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Representante Aparece", "Eventos") });
    document.getElementById("repreApareceText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Representante Aparece", "Eventos") });

    document.getElementById("elipseProyFinaliza").addEventListener("click", eventoProyectoFinaliza);
    document.getElementById("relaGrandeProyFinaliza").addEventListener("click", eventoProyectoFinaliza);
    document.getElementById("relaPequeProyFinaliza").addEventListener("click", eventoProyectoFinaliza);
    document.getElementById("relaProyFinaliza").addEventListener("click", eventoProyectoFinaliza);
    document.getElementById("flechaProyFinaliza").addEventListener("click", eventoProyectoFinaliza);
    document.getElementById("proyFinaliza").addEventListener("click", eventoProyectoFinaliza);
    document.getElementById("proyFinalizaText").addEventListener("click", eventoProyectoFinaliza);
    document.getElementById("elipseProyFinaliza").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Proyecto Finaliza", "Eventos") });
    document.getElementById("relaGrandeProyFinaliza").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Proyecto Finaliza", "Eventos") });
    document.getElementById("relaPequeProyFinaliza").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Proyecto Finaliza", "Eventos") });
    document.getElementById("relaProyFinaliza").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Proyecto Finaliza", "Eventos") });
    document.getElementById("flechaProyFinaliza").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Proyecto Finaliza", "Eventos") });
    document.getElementById("proyFinaliza").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Proyecto Finaliza", "Eventos") });
    document.getElementById("proyFinalizaText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Proyecto Finaliza", "Eventos") });

    document.getElementById("elipseAcuerdoAparece").addEventListener("click", () => { alert("Si") });
    document.getElementById("relaGrandeAcuerdoAparece").addEventListener("click", () => { alert("Si") });
    document.getElementById("relaPequeAcuerdoAparece").addEventListener("click", () => { alert("Si") });
    document.getElementById("relaAcuerdoAparece").addEventListener("click", () => { alert("Si") });
    document.getElementById("flechaAcuerdoAparece").addEventListener("click", () => { alert("Si") });
    document.getElementById("acuerdoAparece").addEventListener("click", () => { alert("Si") });
    document.getElementById("acuerdoApareceText").addEventListener("click", () => { alert("Si") });
    document.getElementById("elipseAcuerdoAparece").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Acuerdo Aparece", "Eventos") });
    document.getElementById("relaGrandeAcuerdoAparece").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Acuerdo Aparece", "Eventos") });
    document.getElementById("relaPequeAcuerdoAparece").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Acuerdo Aparece", "Eventos") });
    document.getElementById("relaAcuerdoAparece").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Acuerdo Aparece", "Eventos") });
    document.getElementById("flechaAcuerdoAparece").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Acuerdo Aparece", "Eventos") });
    document.getElementById("acuerdoAparece").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Acuerdo Aparece", "Eventos") });
    document.getElementById("acuerdoApareceText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Acuerdo Aparece", "Eventos") });

    //Condicional
    document.getElementById("condicionalA").addEventListener("click", eventoCondicional);
    document.getElementById("problema01").addEventListener("click", eventoCondicional);
    document.getElementById("problema01Text").addEventListener("click", eventoCondicional);
    document.getElementById("validacion01").addEventListener("click", eventoCondicional);
    document.getElementById("validacion01Text").addEventListener("click", eventoCondicional);
    document.getElementById("sinAjustes").addEventListener("click", eventoCondicional);
    document.getElementById("sinAjustesText").addEventListener("click", eventoCondicional);
    document.getElementById("problema02").addEventListener("click", eventoCondicional);
    document.getElementById("problema02Text").addEventListener("click", eventoCondicional);
    document.getElementById("validacion02").addEventListener("click", eventoCondicional);
    document.getElementById("validacion02Text").addEventListener("click", eventoCondicional);
    document.getElementById("raya1").addEventListener("click", eventoCondicional);
    document.getElementById("raya2").addEventListener("click", eventoCondicional);
    document.getElementById("raya3").addEventListener("click", eventoCondicional);
    document.getElementById("raya4").addEventListener("click", eventoCondicional);
    document.getElementById("raya5").addEventListener("click", eventoCondicional);
    document.getElementById("raya6").addEventListener("click", eventoCondicional);
    document.getElementById("igual1").addEventListener("click", eventoCondicional);
    document.getElementById("igual1Text").addEventListener("click", eventoCondicional);
    document.getElementById("igual2").addEventListener("click", eventoCondicional);
    document.getElementById("igual2Text").addEventListener("click", eventoCondicional);
    document.getElementById("or").addEventListener("click", eventoCondicional);
    document.getElementById("orText").addEventListener("click", eventoCondicional);

    document.getElementById("condicionalA").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("problema01").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("problema01Text").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("validacion01").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("validacion01Text").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("sinAjustes").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("sinAjustesText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("problema02").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("problema02Text").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("validacion02").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("validacion02Text").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("raya1").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("raya2").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("raya3").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("raya4").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("raya5").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("raya6").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("igual1").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("igual1Text").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("igual2").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("igual2Text").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("or").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });
    document.getElementById("orText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Condicional", "Eventos") });

    //Factores criticos de exito
    document.getElementById("promoverCompetencia").addEventListener("click", formularioPromoverCompetencia);
    document.getElementById("promoverCompetenciaText").addEventListener("click", formularioPromoverCompetencia);
    document.getElementById("promoverCompetencia").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Promover Competencia", "Logros") });
    document.getElementById("promoverCompetenciaText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Promover Competencia", "Logros") });

    document.getElementById("desarrollarProyecto").addEventListener("click", formularioDesarrollarProyecto);
    document.getElementById("desarrollarProyectoText").addEventListener("click", formularioDesarrollarProyecto);
    document.getElementById("desarrollarProyecto").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Desarrollar Proyecto", "Logros") });
    document.getElementById("desarrollarProyectoText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Desarrollar Proyecto", "Logros") });

    document.getElementById("fomentarParticipacion").addEventListener("click", formularioFomentarParticipacion);
    document.getElementById("fomentarParticipacionText").addEventListener("click", formularioFomentarParticipacion);
    document.getElementById("fomentarParticipacion").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Fomentar Participacion", "Logros") });
    document.getElementById("fomentarParticipacionText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Fomentar Participacion", "Logros") });

    document.getElementById("reconocerProgreso").addEventListener("click", formularioReconocerProgreso);
    document.getElementById("reconocerProgresoText").addEventListener("click", formularioReconocerProgreso);
    document.getElementById("reconocerProgreso").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Reconocer Progreso", "Logros") });
    document.getElementById("reconocerProgresoText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Reconocer Progreso", "Logros") });

    document.getElementById("reconocerCausa").addEventListener("click", formularioReconocerCausa);
    document.getElementById("reconocerCausaText").addEventListener("click", formularioReconocerCausa);
    document.getElementById("reconocerCausa").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Reconocer Causa", "Logros") });
    document.getElementById("reconocerCausaText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Reconocer Causa", "Logros") });

    document.getElementById("garantizarEquipoProyecto").addEventListener("click", formularioGarantizarEquipoProyecto);
    document.getElementById("garantizarEquipoProyectoText").addEventListener("click", formularioGarantizarEquipoProyecto);
    document.getElementById("garantizarEquipoProyecto").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Garantizar Proyecto", "Logros") });
    document.getElementById("garantizarEquipoProyectoText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Garantizar Proyecto", "Logros") });

    document.getElementById("garantizarEquipoEstudiante").addEventListener("click", formularioGarantizarEquipoEstudiante);
    document.getElementById("garantizarEquipoEstudianteText").addEventListener("click", formularioGarantizarEquipoEstudiante);
    document.getElementById("garantizarEquipoEstudiante").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Garantizar Estudiante", "Logros") });
    document.getElementById("garantizarEquipoEstudianteText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Garantizar Estudiante", "Logros") });

    document.getElementById("incrementarCartera").addEventListener("click", formularioIncrementarCartera);
    document.getElementById("incrementarCarteraText").addEventListener("click", formularioIncrementarCartera);
    document.getElementById("incrementarCartera").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Incrementar Cartera", "Logros") });
    document.getElementById("incrementarCarteraText").addEventListener("contextmenu", () => { formularioVerEspecificacion(event, "Incrementar Cartera", "Logros") });

    // Haciendo que cada formulario sea arrastrable
    asignarArrastracion(document.getElementById("divForm1"), document.getElementById("barraForm1"));
    asignarArrastracion(document.getElementById("divForm2"), document.getElementById("barraForm2"));
    asignarArrastracion(document.getElementById("divForm3"), document.getElementById("barraForm3"));
}

function asignarArrastracion(formulario, barra) {
    // Propósito: Hacer que el formulario sea "arrastrable"
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    // Se asigna la barra del formulario como el lugar de donde se lo arrastra
    barra.onmousedown = clickMouse;

    function clickMouse(input) {
        input = input || window.event;
        input.preventDefault();

        // Se obtienen las coordenadas X y Y de la posición inicial del mouse
        pos3 = input.clientX; pos4 = input.clientY;

        // Asignando evento para cuando se deja de hacer click
        document.onmouseup = closeDragElement;

        // Asignando evento para cuando se arrastra el mouse
        document.onmousemove = arrastrarFormulario;
    }

    function arrastrarFormulario(input) {
        input = input || window.event;
        input.preventDefault();

        // Se obtienen las nuevas coordenadas del mouse
        pos1 = pos3 - input.clientX;
        pos2 = pos4 - input.clientY;
        pos3 = input.clientX;
        pos4 = input.clientY;

        // Se mueve la ventana segun las nuevas coordenadas
        formulario.style.top = (formulario.offsetTop - pos2) + "px";
        formulario.style.left = (formulario.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // Se deja quitan los eventos al dejar de hacer click
        document.onmouseup = null; document.onmousemove = null;
    }
}

function mostracionFormulario(input, divform) {
    divform.style.display = "block";
    divform.style.top = input.clientY + "px";
    divform.style.left = input.clientX + "px";
}

function AsignacionExpansionTextArea(lista) {
    Array.from(lista).forEach(
        (campo) => {
            campo.addEventListener("input", () => { expansionTextArea(campo) })
        }
    );
}

function expansionTextArea(elemento) {
    elemento.style.height = "auto";
    elemento.style.height = elemento.scrollHeight + "px";
}

function expansionTextAreaDisabled(lista) {
    Array.from(lista).forEach(
        (campo) => {
            campo.style.height = "auto";
            campo.style.height = campo.scrollHeight + "px";
        }
    );
}

function formularioLogin(input, usuario) {

    // Cerrando los formularios 2 y 3
    document.getElementById("divForm2").style.display = "none";
    document.getElementById("divForm3").style.display = "none";

    var id;
    if (usuario == "Administrador") {
        id = `
            <label for="nombre"> Nombre Usuario </label>
            <input type="text" id="nombre">`;
    }
    else {
        id = `
            <label for="identificacion"> Identificación </label>
            <input type="number" id="identificacion">`;
    }

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = `<h1 class='tituloForm'> Iniciar Sesión ${usuario}</h1>`

    document.getElementById("Form1").innerHTML = `
        <div id="datosIniciaSesion" class="campos">
            ${id}

            <label for="contrasena"> Contraseña </label>
            <input type="password" id="contrasena">
        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Aceptar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
        </div>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            login(document.querySelector("#datosIniciaSesion").querySelectorAll("input"), usuario);
        }
    );
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioRegistraProfesor(input) {

    // Checkeacion de tipo de usuario
    if (!controladorRelacionDinamica("Administrador")) { return; }

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Registra Profesor </h1>"

    document.getElementById("Form1").innerHTML = `
        <div class="ayuda">
            <p> 
                Por favor ingrese los datos del profesor y dé clic en “Registrar” para guardarlos
            </p>
        </div>

        <div id="datosRegistraProfesor" class="campos">
            <label for="identificacion"> Identificación </label>
            <input type="number" id="identificacion">

            <label for="nombre"> Nombre </label>
            <input type="text" id="nombre">
            
            <label for="correo"> Correo </label>
            <input type="email" id="correo">

            <label for="celular"> Celular </label>
            <input type="number" id="celular" min="0">

            <label for="direccion"> Dirección </label>
            <input type="text" id="direccion">

            <label for="contrasena"> Contraseña </label>
            <input type="password" id="contrasena">
        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Registrar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
        </div>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosRegistraProfesor").querySelectorAll("input"), "Registra_Profesor");
        }
    );
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioRegistraEstudiante(input) {

    // Checkeacion de tipo de usuario
    if (!controladorRelacionDinamica("Administrador")) { return; }

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Registra Estudiante </h1>"

    document.getElementById("Form1").innerHTML = `
        <div class="ayuda">
            <p> 
                Por favor ingrese los datos del estudiante y dé clic en “Registrar” para guardarlos
            </p>
        </div>

        <div id="datosRegistraEstudiante" class="campos">

            <label for="identificacion"> Identificación </label>
            <input type="number" id="identificacion">

            <label for="nombre"> Nombre </label>
            <input type="text" id="nombre">
            
            <label for="correo"> Correo </label>
            <input type="email" id="correo">

            <label for="celular"> Celular </label>
            <input type="number" id="celular" min="0">

            <label for="direccion"> Dirección </label>
            <input type="text" id="direccion">

            <label for="carrera"> Carrera </label>
            <input type="text" id="carrera">

            <label for="semestre"> Semestre </label>
            <input type="text" id="semestre">

            <label for="contrasena"> Contraseña </label>
            <input type="password" id="contrasena">

        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Registrar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
        </div>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosRegistraEstudiante").querySelectorAll("input"), "Registra_Estudiante");
        }
    );
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioRegistraSemestre(input) {

    // Checkeacion de tipo de usuario
    if (!controladorRelacionDinamica("Administrador")) { return; }

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Registra Semestre </h1>"

    document.getElementById("Form1").innerHTML = `
        <div class="ayuda">
            <p> 
                Por favor ingrese los datos del semestre y dé clic en “Registrar” para guardarlos
            </p>
        </div>

        <div id="datosRegistraSemestre" class="campos">

            <label for="fechaInicio"> Fecha Inicio </label>
            <input type="date" id="fechaInicio">

            <label for="fechaFin"> Fecha Fin </label>
            <input type="date" id="fechaFin">

        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Registrar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
        </div>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosRegistraSemestre").querySelectorAll("input"), "Registra_Semestre");
        }
    );
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioDisenaAsignatura(input) {

    // Checkeacion de tipo de usuario
    if (!controladorRelacionDinamica("Profesor")) { return; }

    // Obteniendo los valores preestablecidos para llenar el formulario
    // const profesoresHTML = obtenerDatosSelect("profesor", "Profesor", profesores, undefined, "nombre");
    const profesoresHTML = usuarioActivo.datos.nombre; var asignaturaHTML = ""; var auxDisabled = ""
    for (var value of Object.values(asignaturas)) {
        if (value.profesor == profesoresHTML) {
            asignaturaHTML = value.nombre
            auxDisabled = "disabled";
            break;
        }
    }

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Diseña Asignatura </h1>"

    document.getElementById("Form1").innerHTML = `
        <div class="ayuda">
            <p> 
                Por favor ingrese el nombre de la asignatura y dé clic en “Agregar Contenido” por 
                cada contenido que necesite agregar, luego dé clic en “Diseñar” para guardar los datos
            </p>
        </div>

        <div id="datosDiseñaAsignatura" class="campos">
            <label for="nombre"> Nombre </label>
            <input type="text" id="nombre" value="${asignaturaHTML}" ${auxDisabled}>

            <label for="profesor"> Profesor </label>
            <input type="text" id="profesor" disabled value="${profesoresHTML}">
        </div>

        <h2 class='subtituloForm'> Contenido </h2>

        <button id="agregarContenido" type="button" class="botonAgregar"> Agregar Contenido </button>

        <div id="contenidoAsignatura" class="tabla"></div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Diseñar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
            <button id="verAsignatura" type="button" class="botonExtra"> Ver Asignatura </button>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    llenarBotonesExpansibles("agregarContenido", "contenidoAsignatura", [["input", "contenido"]], "1.5fr 1fr", "Remover Contenido")

    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosDiseñaAsignatura").querySelectorAll("input, select"), "Asignatura",
                undefined, document.querySelector("#contenidoAsignatura").querySelectorAll("input"));
        }
    );
    document.getElementById("verAsignatura").addEventListener("click", () => { verAsignatura(event, "nombre") }, false);
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function verAsignatura(input, nombreCampoAsignatura = "") {

    // Asignatura seleccionada antes de dar click a ver clases
    // if (nombreCampoAsignatura != "") {
    //     var asignatura = document.getElementById(nombreCampoAsignatura).value;
    // }
    // else {
    //     var asignatura = "";
    // }

    // // Obteniendo los valores preestablecidos para llenar el formulario
    // const asignaturasHTML = obtenerDatosSelect("asignatura", "Nombre", asignaturas, asignatura);

    const profesoresHTML = usuarioActivo.datos.nombre; var asignaturasHTML = "";
    for (var value of Object.values(asignaturas)) {
        if (value.profesor == profesoresHTML) {
            asignaturasHTML = value.nombre
            break;
        }
    }

    // Llenando los datos del formulario
    document.getElementById("barraForm2").innerHTML = "<h1 class='tituloForm'> Ver Asignatura </h1>"

    document.getElementById("Form2").innerHTML = `
        <div id="datosVerAsignatura" class="campos">

            <label for="nombre"> Asignatura </label>
            <input type="text" id="nombre" disabled value="${asignaturasHTML}">

            <label for="profesor"> Profesor </label>
            <input type="text" id="profesor" disabled>
            
            <label for="estado"> Estado </label>
            <input type="text" id="estado" disabled>
            
        </div>
        <div id="datosVerAsignatura" class="botones">
            <button id="verClases" type="button" class="botonExtra"> Ver Clases </button>
            <button id="verContenidos" type="button" class="botonExtra"> Ver Contenidos </button>
        </div>

        <div>
            <button id="cerrarForm2" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm2");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("cerrarForm2").onclick = () => { divform.style.display = "none" };
    document.getElementById("verClases").addEventListener("click", () => { verClases(event, "nombre") }, false);
    document.getElementById("verContenidos").addEventListener("click", () => { verContenidos(event, "nombre") }, false);

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    // document.getElementById("asignatura").addEventListener("change", () => { actualizarCamposSelect("asignatura", "datosVerAsignatura", asignaturas) }, false);
    actualizarCamposSelect("nombre", "datosVerAsignatura", asignaturas)
}

function verClases(input, nombreSelect = "") {

    // Asignatura seleccionada antes de dar click a ver clases
    // if (nombreSelect != "") {
    //     var asignatura = document.getElementById(nombreSelect).value;
    // }
    // else {
    //     var asignatura = "";
    // }

    // Obteniendo los valores preestablecidos para llenar el formulario
    // const asignaturasHTML = obtenerDatosSelect("asignaturaVerClases", "Asignatura", asignaturas, asignatura);

    const profesoresHTML = usuarioActivo.datos.nombre; var asignaturasHTML = "";
    for (var value of Object.values(asignaturas)) {
        if (value.profesor == profesoresHTML) {
            asignaturasHTML = value.nombre
            break;
        }
    }

    // Llenando los datos del formulario
    document.getElementById("barraForm3").innerHTML = "<h1 class='tituloForm'> Ver Clases </h1>"

    document.getElementById("Form3").innerHTML = `
        <div class="campos">
            <label for="nombre"> Asignatura </label>
            <input type="text" id="nombre" disabled value="${asignaturasHTML}">
        </div>

        <div class="titulosTabla" id="tituloTabla2">
            <label> Contenido </label>
            <label> Número </label>
            <label> Temática </label>
        </div>

        <div id="datosVerClases" class="tabla"> </div>

        <div>
            <button id="cerrarForm3" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    document.getElementById("tituloTabla2").style.gridTemplateColumns = "repeat(3, minmax(0, 1fr))";
    document.getElementById("datosVerClases").style.gridTemplateColumns = "repeat(3, minmax(0, 1fr))";

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm3");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("cerrarForm3").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    // document.getElementById("asignaturaVerClases").addEventListener("change",
    //     () => {
    //         var asignatura = document.getElementById("asignaturaVerClases").value;
    //         llenarTablaSelect(asignatura, "datosVerClases", clases, "Clases")
    //     }, false
    // );
    llenarTablaSelect(asignaturasHTML, "datosVerClases", clases, "Clases");
}

function verContenidos(input, nombreSelect) {

    // // Asignatura seleccionada antes de dar click a ver clases
    // var asignatura = document.getElementById(nombreSelect).value;

    // // Obteniendo los valores preestablecidos para llenar el formulario
    // const asignaturasHTML = obtenerDatosSelect("asignaturaConte", "Asignatura", asignaturas, asignatura);

    const profesoresHTML = usuarioActivo.datos.nombre; var asignaturasHTML = "";
    for (var value of Object.values(asignaturas)) {
        if (value.profesor == profesoresHTML) {
            asignaturasHTML = value.nombre
            break;
        }
    }

    // Llenando los datos del formulario
    document.getElementById("barraForm3").innerHTML = "<h1 class='tituloForm'> Ver Contenidos </h1>"

    document.getElementById("Form3").innerHTML = `
        <div class="campos">
            <label for="nombre"> Asignatura </label>
            <input type="text" id="nombre" disabled value="${asignaturasHTML}">
        </div>

        <div class="titulosTabla" id="tituloTabla">
            <label> Contenido </label>
        </div>

        <div class="tabla" id="contenidoTabla"> </div>

        <div>
            <button id="cerrarForm3" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;
    document.getElementById("tituloTabla").style.gridTemplateColumns = "repeat(1, minmax(0, 1fr))";
    document.getElementById("contenidoTabla").style.gridTemplateColumns = "repeat(1, minmax(0, 1fr))";

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm3");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("cerrarForm3").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    // document.getElementById("asignaturaConte").addEventListener("change", () => {
    //     var asignatura = document.getElementById("asignaturaConte").value;
    //     llenarTablaSelect(asignatura, "contenidoTabla", asignaturas[asignatura]["contenidos"], "Contenidos")
    // }, false);
    // llenarTablaSelect(asignatura, "contenidoTabla", asignaturas[asignatura]["contenidos"], "Contenidos")
    if (asignaturas[asignaturasHTML] != undefined) {
        llenarTablaSelect(asignaturasHTML, "contenidoTabla", asignaturas[asignaturasHTML]["contenidos"], "Contenidos")
    }
}

function formularioDisenaClase(input) {

    // Checkeacion de tipo de usuario
    if (!controladorRelacionDinamica("Profesor")) { return; }

    // Obteniendo los valores preestablecidos para llenar el formulario
    const profesoresHTML = usuarioActivo.datos.nombre; var asignaturaHTML = ""; var auxDisabled = ""
    for (var value of Object.values(asignaturas)) {
        if (value.profesor == profesoresHTML) {
            var asignaturasHTML = value.nombre
            var contenidosHTML = obtenerDatosSelect("contenido", "Contenido", value.contenidos, undefined, undefined, undefined, undefined, undefined, true);
            break;
        }
    }

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Diseña Clase </h1>"

    document.getElementById("Form1").innerHTML = `
        <div class="ayuda">
            <p> 
                Por favor, seleccione el contenido correspondiente, ingrese el número y temática de la 
                clase, luego dé clic en “Diseñar” para guardar los datos
            </p>
        </div>

        <div id="datosDiseñaClase" class="campos">

            <label for="asignatura"> Asignatura </label>
            <input type="text" id="asignatura" disabled value="${asignaturasHTML}">

            ${contenidosHTML}

            <label for="tematica"> Temática </label>
            <input type="text" id="tematica">
            
            <label for="numero"> Número </label>
            <input type="number" id="numero" min="0">
            
        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Diseñar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
            <button id="verClases" type="button" class="botonExtra"> Ver Clases </button>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosDiseñaClase").querySelectorAll("input, select"), "Clase",
                document.getElementById("tematica").value);
        }, false
    );
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
    document.getElementById("verClases").addEventListener("click", () => { verClases(event, "asignatura") }, false);
}

function formularioDefineCriterioEvaluacion(input) {

    // Checkeacion de tipo de usuario
    if (!controladorRelacionDinamica("Profesor")) { return; }

    // Obteniendo los valores preestablecidos para llenar el formulario
    const rubricaHTML = obtenerDatosSelect("rubrica", "Nombre de la Rúbrica", { "Informe Inicial": {}, "Informe de Progreso": {}, "Informe Final": {}, "Prototipo Alpha": {}, "Prototipo Beta": {} });

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Define Criterio de Evaluación </h1>"

    document.getElementById("Form1").innerHTML = `
        <div class="ayuda">
            <p> 
                Por favor seleccione el nombre de la rúbrica, 
                ingrese el nombre, descripción y peso del criterio, luego dé clic en “Definir” para guardar los datos
            </p>
        </div>

        <div id="datosDefineCrit" class="campos">

            ${rubricaHTML}

            <label for="nombre"> Nombre </label>
            <input type="text" id="nombre">
            
            <label for="descripcion"> Descripción </label>
            <textarea id="descripcion"></textarea>

            <label for="peso"> Peso (%) </label>
            <input type="number" id="peso" min="0" max="100">
         
        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Definir </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
            <button id="verCriterio" type="button" class="botonExtra"> Ver Criterios </button>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    AsignacionExpansionTextArea(document.querySelector("#datosDefineCrit").querySelectorAll("textarea"));

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            var peso = document.getElementById("peso").value;
            if (peso < 0 || peso > 100) {
                alert("El valor del peso debe estar entre 0 y 100 %")
            }
            else {
                guardarDatos(document.querySelector("#datosDefineCrit").querySelectorAll("select, input, textarea"), "Criterio",
                    document.getElementById("nombre").value);
            }
        }
    );
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
    document.getElementById("verCriterio").addEventListener("click", () => { verCriterios(event, "rubrica") }, false);
}

function verCriterios(input, selectRubrica) {

    var rubrica = document.getElementById(selectRubrica).value;

    const rubricaHTML = obtenerDatosSelect("rubricaVer", "Nombre de la Rúbrica", { "Informe Inicial": {}, "Informe de Progreso": {}, "Informe Final": {}, "Prototipo Alpha": {}, "Prototipo Beta": {} }, rubrica);

    document.getElementById("barraForm2").innerHTML = `<h1 class='tituloForm'> Ver Criterios </h1>`

    document.getElementById("Form2").innerHTML = `
        <div id="datosVerCriterio" class="campos">
            ${rubricaHTML}

            <label for="pesoTotal"> Peso Total </label>
            <input type="text" id="pesoTotal" disabled>
        </div>

        <div id="columnas" class="titulosTabla">
            <label> Nombre </label>
            <label> Descripción </label>
            <label> Peso (%) </label>
        </div>

        <div id="datosCriteriosVer" class="tabla"> </div>

        <div>
            <button id="cerrarForm2" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;
    document.getElementById("columnas").style.gridTemplateColumns = "1.5fr 2.3fr 1.2fr";
    document.getElementById("datosCriteriosVer").style.gridTemplateColumns = "1.5fr 2.3fr 1.2fr";

    // document.getElementById("columnas").style.gridTemplateColumns = "1.5fr 4fr 1.2fr 4fr 1.2fr 1.2fr";

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm2");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("cerrarForm2").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("rubricaVer").addEventListener("change",
        () => {
            llenarTablaSelect(document.getElementById("rubricaVer").value,
                "datosCriteriosVer", { a: { a: "a" } }, "Criterios")

            // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
            expansionTextAreaDisabled(document.querySelector("#datosCriteriosVer").querySelectorAll("textarea"));

        }
    );
    llenarTablaSelect(document.getElementById("rubricaVer").value,
        "datosCriteriosVer", { a: { a: "a" } }, "Criterios")

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    expansionTextAreaDisabled(document.querySelector("#datosCriteriosVer").querySelectorAll("textarea"));
}

function formularioRegistraEmpresa(input) {

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Registra Empresa </h1>"

    document.getElementById("Form1").innerHTML = `
        <div class="ayuda">
            <p> 
                Por favor ingrese los datos de la empresa y el representante y dé clic en “Registrar” para guardarlos
            </p>
        </div>

        <h2 class='subtituloForm'> Datos Empresa </h2>

        <div id="datosRegistraEmpresa" class="campos">
            <label for="nombre"> Nombre </label>
            <input type="text" id="nombre">
            
            <label for="mision"> Misión </label>
            <textarea id="mision"></textarea>
            
            <label for="vision"> Visión </label>
            <textarea id="vision"></textarea>
            
            <label for="objetivoEmpresa"> Objetivo Estratégico </label>
            <textarea id="objetivoEmpresa"></textarea>
            
            <label for="necesidad"> Necesidad </label>
            <textarea id="necesidad"></textarea>
        </div>

        <h2 class='subtituloForm'> Datos Representante </h2>

        <div id="datosRegistraRepresentante" class="campos">
            
            <label for="identificacion"> Identificación </label>
            <input type="number" id="identificacion">

            <label for="nombre"> Nombre </label>
            <input type="text" id="nombre">
        
            <label for="contrasena"> Contraseña </label>
            <input type="password" id="contrasena">

            <label for="correo"> Correo </label>
            <input type="email" id="correo">
            
            <label for="celular"> Celular </label>
            <input type="number" id="celular" min="0">
            
            <label> Disponibilidad </label>

            <div class="radios">
                <input type="radio" id="disponibilidad" name="disponibilidad" value="Poca">
                <label> Poca </label>

                <input type="radio" id="disponibilidad" name="disponibilidad" value="Mucha">
                <label> Mucha </label>
            </div>
        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Registrar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
        </div>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    AsignacionExpansionTextArea(document.querySelector("#datosRegistraEmpresa").querySelectorAll("textarea"));

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            const llaveEmpresa = document.querySelector("#datosRegistraEmpresa").querySelectorAll("input")[0].value;

            const condicionDatosIngresados = guardarDatos(document.querySelector("#datosRegistraEmpresa").querySelectorAll("input, textarea"), "Empresa", undefined,
                document.querySelector("#datosRegistraRepresentante").querySelectorAll("input"));

            if (condicionDatosIngresados) {
                guardarDatos(document.querySelector("#datosRegistraRepresentante").querySelectorAll("input"), "Representante",
                    undefined, [["empresa", empresas[llaveEmpresa].nombre]]);
            }
        }
    );
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioDefineProblema(input) {

    // Checkeacion de tipo de usuario
    if (!controladorRelacionDinamica("Representante")) { return; }

    // Obteniendo los valores preestablecidos para llenar el formulario
    // const empresasHTML = obtenerDatosSelect("empresa", "Nombre Empresa", empresas);
    const empresasHTML = usuarioActivo.datos.empresa;

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Define Problema </h1>"

    document.getElementById("Form1").innerHTML = `
        <div class="ayuda">
            <p> 
                Por favor ingrese los datos del problema y en la sección de “Actor Involucrado” 
                introduzca los actores separados por comas y dé clic en “Definir” para guardar los datos
            </p>
        </div>

        <div id="datosDefineProblema" class="campos">
            
            <label for="representante"> Nombre Representante </label>
            <input type="text" id="representante" disabled value="${usuarioActivo.datos.nombre}">

            <label for="empresa"> Nombre Empresa </label>
            <input type="text" id="empresa" disabled value="${empresasHTML}">

            <label for="causa"> Causa </label>
            <textarea id="causa"></textarea>
            
            <label for="descripcionProblema"> Descripción </label>
            <textarea id="descripcionProblema"></textarea>

            <label for="impacto"> Impacto </label>
            <textarea id="impacto"></textarea>
            
            <label for="proceso"> Proceso Asociado </label>
            <textarea id="proceso"></textarea>

            <label for="actor"> Actor Involucrado </label>
            <input type="text" id="actor">
        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Definir </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
        </div>
        
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    AsignacionExpansionTextArea(document.querySelector("#datosDefineProblema").querySelectorAll("textarea"));

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosDefineProblema").querySelectorAll("input, select, textarea"), "Problema", empresasHTML);
        });
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioValidaProblema(input) {

    // Checkeacion de tipo de usuario
    if (!controladorRelacionDinamica("Profesor")) { return; }

    // Obteniendo los valores preestablecidos para llenar el formulario
    const empresasHTML = obtenerDatosSelect("empresa", "Nombre Empresa", empresas);
    const validacionHTML = obtenerDatosSelect("validacion", "Validación", { "Aprobado Sin Ajustes": {}, "Aprobado Con Ajustes": {}, "No Aprobado": {} });

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Valida Problema </h1>"

    document.getElementById("Form1").innerHTML = `
        <div class="ayuda">
            <p> 
                Por favor seleccione el nombre de la empresa para ver el problema asociado, luego 
                seleccione la validación e ingrese un comentario, finalmente, dé clic en “Validar” 
                para guardar los datos
            </p>
        </div>

        <div id="datosProblema" class="campos">

            ${empresasHTML}

            <label for="causa"> Causa </label>
            <textarea id="causa" disabled></textarea>
            
            <label for="descripcionProblema"> Descripción </label>
            <textarea id="descripcionProblema" disabled></textarea>

            <label for="impacto"> Impacto </label>
            <textarea id="impacto" disabled></textarea>
            
            <label for="proceso"> Proceso Asociado </label>
            <textarea id="proceso" disabled></textarea>

            <label for="actor"> Actor Involucrado </label>
            <input type="text" id="actor" disabled>
            
            ${validacionHTML}

            <label for="comentario"> Comentario </label>
            <textarea id="comentario"></textarea>
        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Validar </button>
            <button id="reset" type="button" class="botonBorrar"> Limpiar Campos </button>
            <button id="verEmpresa" type="button" class="botonExtra"> Ver Empresa </button>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;

    // Borrado especial cuando hay campos editables y no editables
    document.getElementById("reset").addEventListener("click",
        () => {
            document.getElementById("comentario").value = "";
        }
    );

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    AsignacionExpansionTextArea(document.querySelector("#datosProblema").querySelectorAll("textarea"));

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosProblema").querySelectorAll("input, select, textarea"), "Problema", undefined, 0);
        }
    );
    document.getElementById("verEmpresa").addEventListener("click", () => { verEmpresa(event, "empresa") }, false);
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("empresa").addEventListener("change",
        () => {
            actualizarCamposSelect("empresa", "datosProblema", problemas)

            // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
            expansionTextAreaDisabled(document.querySelector("#datosProblema").querySelectorAll("textarea"));
        }
    );
    actualizarCamposSelect("empresa", "datosProblema", problemas);

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    expansionTextAreaDisabled(document.querySelector("#datosProblema").querySelectorAll("textarea"));
}

function verEmpresa(input, selectEmpresa) {

    nombreEmpresa = document.getElementById(selectEmpresa).value

    // Obteniendo los valores preestablecidos para llenar el formulario
    const empresasHTML = obtenerDatosSelect("empresaVer", "Nombre Empresa", empresas, nombreEmpresa);

    // Llenando los datos del formulario
    document.getElementById("barraForm2").innerHTML = "<h1 class='tituloForm'> Ver Empresa </h1>"

    document.getElementById("Form2").innerHTML = `
    
        <h2 class='subtituloForm'> Datos Empresa </h2>

        <div id="datosEmpresa" class="campos">

            ${empresasHTML}
            
            <label for="mision"> Misión </label>
            <textarea id="mision" disabled></textarea>
            
            <label for="vision"> Visión </label>
            <textarea id="vision" disabled></textarea>
            
            <label for="objetivoEmpresa"> Objetivo Estratégico </label>
            <textarea id="objetivoEmpresa" disabled></textarea>
            
            <label for="necesidad"> Necesidad </label>
            <textarea id="necesidad" disabled></textarea>
        </div>
    
        <h2 class='subtituloForm'> Datos Representante </h2>

        <div id="datosRepresentante" class="campos">
            <label for="nombre"> Nombre </label>
            <input type="text" id="nombre" disabled>
            
            <label for="correo"> Correo </label>
            <input type="email" id="correo" disabled>
            
            <label for="celular"> Celular </label>
            <input type="text" id="celular" min="0" disabled>
            
            <label> Disponibilidad </label>
            <input type="text" id="disponibilidad" disabled>
        </div>
        
        <button id="cerrarForm2" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm2");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("cerrarForm2").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("empresaVer").addEventListener("change",
        () => {
            actualizarCamposSelect("empresaVer", "datosEmpresa", empresas);
            actualizarCamposSelect("empresaVer", "datosRepresentante", representantes, "empresa");

            // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
            expansionTextAreaDisabled(document.querySelector("#datosEmpresa").querySelectorAll("textarea"));
        }
    );

    actualizarCamposSelect("empresaVer", "datosEmpresa", empresas);
    actualizarCamposSelect("empresaVer", "datosRepresentante", representantes, "empresa");

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    expansionTextAreaDisabled(document.querySelector("#datosEmpresa").querySelectorAll("textarea"));
}

function formularioConstruyeCartera(input) {

    // Checkeacion de tipo de usuario
    if (!controladorRelacionDinamica("Profesor")) { return; }

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Construye Cartera de Proyecto </h1>"

    document.getElementById("Form1").innerHTML = `
        <div class="ayuda">
            <p> 
                Por favor dé clic en “Agregar Proyecto” para insertar proyectos en la cartera de proyectos
            </p>
        </div>

        <div id="datosCartera" class="campos">
            
            <label for="cantidad"> Cantidad </label>
            <input type="number" id="cantidad" disabled value="${carteraDeProyectos.cantidadProyectos}">

        </div>
        
        <div class="botones">
            <button id="agregaProyecto" type="button" class="botonExtra"> Agregar Proyecto </button>
            <button id="verProyecto" type="button" class="botonExtra"> Ver Proyecto </button>
        </div>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("agregaProyecto").addEventListener("click", () => { agregarProyecto(event) }, false);
    document.getElementById("verProyecto").addEventListener("click", () => { verProyecto(event) }, false);
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function agregarProyecto(input) {
    // Obteniendo los valores preestablecidos para llenar el formulario
    const empresasHTML = obtenerDatosSelect("empresa", "Nombre Empresa", empresas, undefined, undefined, "validacion",
        ["Aprobado Sin Ajustes", "Aprobado Con Ajustes"], problemas);

    // Llenando los datos del formulario
    document.getElementById("barraForm2").innerHTML = "<h1 class='tituloForm'> Agregar Proyecto </h1>"

    document.getElementById("Form2").innerHTML = `
        <div class="ayuda">
            <p> 
                Por favor seleccione el nombre de la empresa, ingrese el objetivo estratégico y descripción 
                asociados al proyecto, luego dé clic en “Agregar Proyecto” para guardar los datos
            </p>
        </div>

        <div id="datosProyecto" class="campos">

            ${empresasHTML}

            <label for="objetivoProyecto"> Objetivo Estratégico </label>
            <textarea id="objetivoProyecto"></textarea>

            <label for="descripcionProyecto"> Descripción </label>
            <textarea id="descripcionProyecto"></textarea>

        </div>
        
        <div class="botones">
            <button id="confirmarForm2" type="button" class="botonExtra"> Agregar Proyecto </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
        </div>
        <button id="cerrarForm2" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm2");
    mostracionFormulario(input, divform)

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    AsignacionExpansionTextArea(document.querySelector("#datosProyecto").querySelectorAll("textarea"));

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm2").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosProyecto").querySelectorAll("select, textarea"), "Proyecto");
            document.getElementById("cantidad").value = carteraDeProyectos.cantidadProyectos;
        }
    );
    document.getElementById("cerrarForm2").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("empresa").addEventListener("change",
        () => {
            actualizarCamposSelect("empresa", "datosProyecto", empresas);
        }
    );
    actualizarCamposSelect("empresa", "datosProyecto", empresas);
}

function verProyecto(input) {

    // Obteniendo los valores preestablecidos para llenar el formulario
    const proyectosHTML = obtenerDatosSelect("proyectos", "Nombre Empresa", carteraDeProyectos.proyectos);

    // Llenando los datos del formulario
    document.getElementById("barraForm3").innerHTML = "<h1 class='tituloForm'> Ver Proyecto </h1>"

    document.getElementById("Form3").innerHTML = `
       
        <div id="datosVerProyecto" class="campos">

            ${proyectosHTML}

            <label for="objetivoProyecto"> Objetivo Estratégico </label>
            <textarea id="objetivoProyecto" disabled></textarea>

            <label for="descripcionProyecto"> Descripción </label>
            <textarea id="descripcionProyecto" disabled></textarea>

        </div>
        
        <button id="cerrarForm3" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm3");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("cerrarForm3").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("proyectos").addEventListener("change",
        () => {
            actualizarCamposSelect("proyectos", "datosVerProyecto", carteraDeProyectos.proyectos);

            // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
            expansionTextAreaDisabled(document.querySelector("#datosVerProyecto").querySelectorAll("textarea"));
        }
    );
    actualizarCamposSelect("proyectos", "datosVerProyecto", carteraDeProyectos.proyectos);

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    expansionTextAreaDisabled(document.querySelector("#datosVerProyecto").querySelectorAll("textarea"));
}

function formularioRegistraHistoria(input) {

    // Obteniendo los valores preestablecidos para llenar el formulario
    const estudiantesHTML = usuarioActivo.datos.nombre;

    // Checkeacion de tipo de usuario
    if (!controladorRelacionDinamica("Estudiante")) { return; }

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Registra Historia Académica </h1>"

    document.getElementById("Form1").innerHTML = `
        <div class="ayuda" id="ayuda">
            <p> 
                Por favor ingrese la participación y seleccione el tipo de competencia, haga clic en 
                “Agregar Asignatura” para ingresar asignaturas en la historia académica, para cada una de estas, 
                ingrese el nombre, la nota y el semestre en que fue cursada  y dé clic en “Registrar” para guardar los datos
            </p>
        </div>
    
        <h2 class='subtituloForm'> Datos Estudiante </h2>

        <div id="datosRegistraEstudiante" class="campos">
            <label for="nombre"> Nombre </label>
            <input type="text" id="nombre" disabled value="${estudiantesHTML}">

            <label for="participacion"> Participacion </label>
            <input type="text" id="participacion">

            <label> Competencia </label>

            <div class="radios">
                <input type="radio" id="competencia" name="competencia" value="Técnica">
                <label> Técnica </label>

                <input type="radio" id="competencia" name="competencia" value="Social">
                <label> Social </label>
            </div>
        </div>

        <h2 class='subtituloForm'> Historia Académica </h2>

        <button id="agregarAsignatura" type="button" class="botonAgregar"> Agregar Asignatura </button>
        
        <div id="titulosColumnas" class="titulosTabla">
            <label> Nombre </label>
            <label> Nota </label>
            <label> Semestre </label>
            <label> Remover </label>
        </div>

        <div id="datosAgregaAsig" class="tabla"> </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Registrar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
            <button id="verHistoria" type="button" class="botonExtra"> Ver Historia Académica </button>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `;
    // Cambiando el número de columnas de la tabla (ya que por defecto son 2)
    document.getElementById("titulosColumnas").style.gridTemplateColumns = "100px 30px 50px 70px";
    document.getElementById("ayuda").style.width = "250px";

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    AsignacionExpansionTextArea(document.querySelector("#datosRegistraEstudiante").querySelectorAll("textarea"));

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    llenarBotonesExpansibles("agregarAsignatura", "datosAgregaAsig", [["input", "nombre"], ["input", "nota", "number", 0, 5], ["input", "semestre"]],
        "100px 30px 50px 70px", "Remover Asignatura");

    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            // const llaveEstudiante = document.querySelector("#datosRegistraEstudiante").querySelectorAll("input")[1].value;

            // guardarDatos(document.querySelector("#datosRegistraEstudiante").querySelectorAll("input"), "Estudiante", llaveEstudiante,
            //     document.querySelector("#datosAgregaAsig").querySelectorAll("input"));

            guardarDatos(document.querySelector("#datosRegistraEstudiante").querySelectorAll("input"), "Estudiante", usuarioActivo.datos.identificacion,
                document.querySelector("#datosAgregaAsig").querySelectorAll("input"));
        }
    );
    // document.getElementById("verHistoria").onclick = () => { verHistoria(event, document.getElementById("identificacion").value) };
    document.getElementById("verHistoria").onclick = () => { verHistoria(event, usuarioActivo.datos.identificacion) };
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function verHistoria(input, idEstudiante) {

    // // Obteniendo los valores preestablecidos para llenar el formulario
    // const estudiantesHTML = obtenerDatosSelect("estudiante", "Nombre Estudiante", estudiantes, idEstudiante, "nombre");

    // Llenando los datos del formulario
    document.getElementById("barraForm2").innerHTML = "<h1 class='tituloForm'> Ver Historia Académica </h1>"

    document.getElementById("Form2").innerHTML = `
    
        <h2 class='subtituloForm'> Datos Estudiante </h2>

        <div id="datosEstudiante" class="campos">
            <label for="nombre"> Nombre </label>
            <input type="text" id="nombre" disabled>

            <label for="identificacion"> Identificación </label>
            <input type="number" id="identificacion" min="0" disabled>
            
            <label for="direccion"> Dirección </label>
            <textarea id="direccion" disabled></textarea>
            
            <label for="celular"> Celular </label>
            <input type="number" id="celular" min="0" disabled>

            <label for="correo"> Correo </label>
            <input type="email" id="correo" disabled>

            <label for="carrera"> Carrera </label>
            <input type="text" id="carrera" disabled>

            <label for="semestre"> Semestre </label>
            <input type="text" id="semestre" disabled>

            <label for="participacion"> Participacion </label>
            <input type="text" id="participacion" disabled>

            <label for="competencia"> Competencia </label>
            <input type="text" id="competencia" disabled>

        </div>
    
        <h2 class='subtituloForm'> Asignaturas </h2>

        <div class="campos">
            <label for="promedio"> Promedio </label>
            <input type="number" id="promedio" disabled>
        </div>

        <div id="titulosColumnasVer" class="titulosTabla">
            <label> Nombre </label>
            <label> Nota </label>
            <label> Semestre </label>
        </div>

        <div id="datosVerHistoria" class="tabla"> </div>
        
        <button id="cerrarForm2" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Cambiando el número de columnas de la tabla (ya que por defecto son 2)
    document.getElementById("titulosColumnasVer").style.gridTemplateColumns = "repeat(3, minmax(0, 1fr)";
    document.getElementById("datosVerHistoria").style.gridTemplateColumns = "repeat(3, minmax(0, 1fr)";

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm2");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("cerrarForm2").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    // document.getElementById("estudiante").addEventListener("change",
    //     () => {
    //         var idEstudiante = estudiantes[document.getElementById("estudiante").value].identificacion;

    //         actualizarCamposSelect("estudiante", "datosEstudiante", estudiantes);
    //         llenarTablaSelect(idEstudiante, "datosVerHistoria", estudiantes, "Historia");

    //         var estudiante = estudiantes[document.getElementById("estudiante").value];

    //         if (estudiante.historia != undefined) {
    //             document.getElementById("promedio").value = estudiante.historia.promedio.toFixed(2);
    //         } else {
    //             document.getElementById("promedio").value = "";
    //         }

    //         // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    //         expansionTextAreaDisabled(document.querySelector("#datosEstudiante").querySelectorAll("textarea"));
    //     }
    // );

    // actualizarCamposSelect("nombre", "datosEstudiante", estudiantes);
    actualizarCamposSelect(idEstudiante, "datosEstudiante", estudiantes, undefined, undefined, true);
    llenarTablaSelect(idEstudiante, "datosVerHistoria", estudiantes, "Historia");

    // var estudiante = estudiantes[document.getElementById("estudiante").value];

    // if (estudiante.historia != undefined) {
    //     document.getElementById("promedio").value = estudiante.historia.promedio.toFixed(2);
    // } else {
    //     document.getElementById("promedio").value = "";
    // }
    if (estudiantes[idEstudiante].historia != undefined) {
        document.getElementById("promedio").value = estudiantes[idEstudiante].historia.promedio.toFixed(2);
    } else {
        document.getElementById("promedio").value = "";
    }
    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    expansionTextAreaDisabled(document.querySelector("#datosEstudiante").querySelectorAll("textarea"));
}

function formularioConformaEquipo(input) {

    // Checkeacion de tipo de usuario
    if (!controladorRelacionDinamica("Profesor")) { return; }

    // Obteniendo los valores preestablecidos para llenar el formulario
    const empresasHTML = obtenerDatosSelect("empresa", "Empresa Proyecto", carteraDeProyectos.proyectos);

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Conforma Equipo </h1>"

    document.getElementById("Form1").innerHTML = `
        <div class="ayuda" id="ayuda">
            <p> 
                Por favor seleccione empresa proyecto, dé clic en el botón “Agregar Estudiante” las veces que necesite, 
                seleccione los nombres de los estudiantes que conformarán el equipo, y dé clic en el botón “Conformar” 
                para guardar los datos
            </p>
        </div>

        <div id="datosEquipo" class="campos">
        
            ${empresasHTML}

            <label for="cantidad"> Cantidad Estudiantes </label>
            <input type="number" id="cantidad" value="0" disabled>
            
        </div>
        
        <h2 class='subtituloForm'> Estudiantes </h2>
        
        <button id="agregarEstudiante" type="button" class="botonAgregar"> Agregar Estudiante </button>

        <div id="titulosColumnas" class="titulosTabla">
            <label> Nombre </label>
            <label> Ver </label>
            <label> Remover </label>
        </div>

        <div id="datosAgregaEst" class="tabla"> </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Conformar </button>
            <button id="verEquipo" type="button" class="botonExtra"> Ver Equipo </button>
        </div>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;
    document.getElementById("titulosColumnas").style.gridTemplateColumns = "100px 70px 70px";
    document.getElementById("ayuda").style.width = "250px";

    llenarBotonesExpansibles("agregarEstudiante", "datosAgregaEst", [["select", "estudiante", estudiantes]], "100px 70px 70px", "Remover Estudiante",
        "Ver Historia Académica", verHistoria, "cantidad");

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosEquipo").querySelectorAll("select, input"), "Equipo", undefined,
                document.querySelector("#datosAgregaEst").querySelectorAll("select"));
        }
    );
    document.getElementById("verEquipo").addEventListener("click", () => { verEquipo(event) }, false);
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function verEquipo(input) {

    // Obteniendo los valores preestablecidos para llenar el formulario
    const equiposHTML = obtenerDatosSelect("equipo", "Código", equipos);

    // Llenando los datos del formulario
    document.getElementById("barraForm2").innerHTML = "<h1 class='tituloForm'> Ver Equipo </h1>"

    document.getElementById("Form2").innerHTML = `
    
        <h2 class='subtituloForm'> Datos Equipo </h2>

        <div id="datosEquipoVer" class="campos">

            ${equiposHTML}

            <label for="cantidad"> Cantidad </label>
            <input type="number" id="cantidad" disabled>
            
            <label for="comunicacion"> Comunicación </label>
            <textarea id="comunicacion" disabled></textarea>
        </div>

        <div id="datosEquipoMetodologia" class="campos">

            <label for="nombre"> Nombre Metodología </label>
            <input type="text" id="nombre" disabled>

            <label for="pasos"> Pasos Metodología </label>
            <input type="text" id="pasos" disabled>

            <label for="roles"> Roles Metodología </label>
            <input type="text" id="roles" disabled>
        </div>
        
        <h2 class='subtituloForm'> Estudiantes </h2>

        <div id="titulosColumnasVer" class="titulosTabla">
            <label> Nombre </label>
            <label> Identificación </label>
        </div>

        <div id="datosVerIntegrantes" class="tabla"> </div>
        
        <button id="cerrarForm2" type="button" class="botonCerrar"> Cerrar </button>
    `;
    document.getElementById("datosEquipoVer").style.gridTemplateColumns = "60px 150px";
    document.getElementById("datosEquipoMetodologia").style.gridTemplateColumns = "60px 150px";
    document.getElementById("titulosColumnasVer").style.gridTemplateColumns = "1fr 1fr";
    document.getElementById("datosVerIntegrantes").style.gridTemplateColumns = "1fr 1fr";

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm2");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("cerrarForm2").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("equipo").addEventListener("change",
        () => {
            const idEquipo = document.getElementById("equipo").value

            actualizarCamposSelect("equipo", "datosEquipoVer", equipos);
            actualizarCamposSelect("equipo", "datosEquipoMetodologia", metodologiasDesarrollo);
            llenarTablaSelect(idEquipo, "datosVerIntegrantes", equipos, "Equipo");

            // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
            expansionTextAreaDisabled(document.querySelector("#datosEquipoVer").querySelectorAll("textarea"));
        }
    );
    actualizarCamposSelect("equipo", "datosEquipoVer", equipos);
    actualizarCamposSelect("equipo", "datosEquipoMetodologia", metodologiasDesarrollo);
    llenarTablaSelect(document.getElementById("equipo").value, "datosVerIntegrantes", equipos, "Equipo");

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    expansionTextAreaDisabled(document.querySelector("#datosEquipoVer").querySelectorAll("textarea"));
}

function formularioDefineMetodologia(input) {

    // Checkeacion de tipo de usuario
    if (!controladorRelacionDinamica("Estudiante")) { return; }

    // // Obteniendo los valores preestablecidos para llenar el formulario
    // const equiposHTML = obtenerDatosSelect("equipo", "Código Equipo", equipos);
    var equiposHTML = "";
    for (var [key, value] of Object.entries(equipos)) {
        for (var value2 of Object.values(value.integrantes)) {
            if (estudiantes[value2] != undefined) {
                if (value2 == usuarioActivo.datos.identificacion) {
                    equiposHTML = key;
                    break;
                }
            }
        }
    }

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Define Metodologia de Desarrollo </h1>"

    document.getElementById("Form1").innerHTML = `
        <div class="ayuda">
            <p> 
                Por favor ingrese el nombre de la metodología, los pasos separados por comas y los roles separados por 
                comas, y dé clic en el botón “Definir” para guardar los datos
            </p>
        </div>

        <div id="datosMetodologia" class="campos">

            <label for="equipo"> Código Equipo </label>
            <input type="text" id="equipo" disabled value="${equiposHTML}">

            <label for="nombre"> Nombre </label>
            <input type="text" id="nombre">
            
            <label for="pasos"> Pasos </label>
            <textarea id="pasos"></textarea>

            <label for="roles"> Roles </label>
            <textarea id="roles"></textarea>

        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Definir </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
        </div>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    AsignacionExpansionTextArea(document.querySelector("#datosMetodologia").querySelectorAll("textarea"));

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosMetodologia").querySelectorAll("select, input, textarea"), "Metodologia");
        }
    );
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioEntregaInformePrototipo(input, tipoInfProt) {

    // Checkeacion de tipo de usuario
    if (!controladorRelacionDinamica("Estudiante")) { return; }

    // Parámetros que cambian dependiendo del tipo de informe y prototipo
    var contenido;

    var botones = `
        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Entregar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
            <button id="verCalificacion" type="button" class="botonExtra"> Ver ${tipoInfProt} </button>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
        </div>
    `
    // // Obteniendo los valores preestablecidos para llenar el formulario
    // const equiposHTML = obtenerDatosSelect("equipo", "Código Equipo", equipos);
    var equiposHTML = "";
    for (var [key, value] of Object.entries(equipos)) {
        for (var value2 of Object.values(value.integrantes)) {
            if (estudiantes[value2] != undefined) {
                if (value2 == usuarioActivo.datos.identificacion) {
                    equiposHTML = key;
                    break;
                }
            }
        }
    }

    if (tipoInfProt == "Informe Inicial" || tipoInfProt == "Informe de Progreso" || tipoInfProt == "Informe Final") {

        switch (tipoInfProt) {
            case "Informe Inicial":
                contenido = `
                    <div class="ayuda">
                        <p> 
                            Por favor ingrese la idea de desarrollo, seleccione el botón “Subir Archivo” 
                            para agregar el archivo, seleccione el botón “Agregar Sección” las veces que necesite para 
                            agregar las secciones y dé clic en botón “Entregar” para guardar los datos
                        </p>
                    </div>

                    <div id="datosEntrega" class="campos">
            
                        <label for="equipo"> Código Equipo </label>
                        <input type="text" id="equipo" disabled value="${equiposHTML}">

                        <label for="tema"> Tema </label>
                        <input id="tema" disabled value ="${equiposHTML.split(" ")[0]}">

                        <label for="idea"> Idea de Desarrollo </label>
                        <textarea id="idea"></textarea>

                        <button type="button" id="subirArchivo" class="botonExtra"> Subir Archivo </button>
                        <input type="text" id="archivo" disabled>
                    </div>
                `
                break;

            case "Informe de Progreso":
                contenido = `
                    <div class="ayuda">
                        <p> 
                            Por favor ingrese el avance, seleccione el botón “Subir Archivo” para agregar el archivo, 
                            seleccione el botón “Agregar Sección” las veces que necesite para agregar las secciones 
                            y dé clic en botón “Entregar” para guardar los datos
                        </p>
                    </div>

                    <div id="datosEntrega" class="campos">
            
                        <label for="equipo"> Código Equipo </label>
                        <input type="text" id="equipo" disabled value="${equiposHTML}">

                        <label for="tema"> Tema </label>
                        <input id="tema" disabled value ="${equiposHTML.split(" ")[0]}">

                        <label for="avance"> Avance </label>
                        <textarea id="avance"></textarea>

                        <button type="button" id="subirArchivo" class="botonExtra"> Subir Archivo </button>
                        <input type="text" id="archivo" disabled>
                    </div>
                `
                break;

            case "Informe Final":
                contenido = `
                    <div class="ayuda">
                        <p> 
                            Por favor ingrese la conclusión, seleccione el botón “Agregar Sección” las veces 
                            que necesite para agregar las secciones, seleccione el botón “Subir Archivo” para agregar el 
                            archivo y dé clic en el botón “Entregar” para guardar los datos
                        </p>
                    </div>

                    <div id="datosEntrega" class="campos">

                        <label for="equipo"> Código Equipo </label>
                        <input type="text" id="equipo" disabled value="${equiposHTML}">

                        <label for="tema"> Tema </label>
                        <input id="tema" disabled value ="${equiposHTML.split(" ")[0]}">

                        <label for="conclusion"> Conclusión </label>
                        <textarea id="conclusion"></textarea>

                        <button type="button" id="subirArchivo" class="botonExtra"> Subir Archivo </button>
                        <input type="text" id="archivo" disabled>
                    </div>
                `
                break;
        }
        contenido += `
            <h2 class='subtituloForm'> Secciones </h2>
            <button id="agregarSeccion" type="button" class="botonAgregar"> Agregar Sección </button>
            <div id="datosAgregaSecc" class="tabla"> </div>
        `
    }
    else {
        contenido = `
            <div class="ayuda">
                <p> 
                    Por favor ingrese el link del prototipo y dé clic en el botón “Entregar” para guardar los datos
                </p>
            </div>

            <div id="datosEntrega" class="campos">
            
                <label for="equipo"> Código Equipo </label>
                <input type="text" id="equipo" disabled value="${equiposHTML}">

                <label for="link"> Link </label>
                <input type="url" id="link">

            </div>
        `
        if (tipoInfProt == "Prototipo Alpha") {
            var botones = `
                <div class="botones">
                    <button id="confirmarForm1" type="button" class="botonConfirmar"> Entregar </button>
                    <button type="reset" class="botonBorrar"> Limpiar Campos </button>
                    <button id="verCalificacion" type="button" class="botonExtra"> Ver ${tipoInfProt} </button>
                    <button id="verRetroalimentacion" type="button" class="botonExtra"> Ver Retroalimentación </button>
                </div>
            <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
            `
        }
    }

    // Juntando los datos del formulario
    document.getElementById("barraForm1").innerHTML = `<h1 class='tituloForm'> Entrega ${tipoInfProt} </h1>`
    document.getElementById("Form1").innerHTML = `${contenido} ${botones} `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    AsignacionExpansionTextArea(document.querySelector("#datosEntrega").querySelectorAll("textarea"));

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    if (tipoInfProt == "Informe Inicial" || tipoInfProt == "Informe de Progreso" || tipoInfProt == "Informe Final") {
        llenarBotonesExpansibles("agregarSeccion", "datosAgregaSecc", [["input", "seccion"]], "140px 70px", "Remover Seccion");
        document.getElementById("confirmarForm1").addEventListener("click",
            () => {
                guardarDatos(document.querySelector("#datosEntrega").querySelectorAll("select, input, textarea"), "Entrega_" + tipoInfProt,
                    undefined, document.getElementById("datosAgregaSecc").querySelectorAll("input"));
            }
        );
    } else {
        document.getElementById("confirmarForm1").addEventListener("click",
            () => {
                guardarDatos(document.querySelector("#datosEntrega").querySelectorAll("select, input, textarea"), "Entrega_" + tipoInfProt);
            }
        );
    }
    document.getElementById("verCalificacion").addEventListener("click", () => { verCalificacion(event, "equipo", tipoInfProt) });

    if (tipoInfProt == "Prototipo Alpha") {
        document.getElementById("verRetroalimentacion").addEventListener("click",
            () => {
                verRetroalimentacion(event, "equipo");
            }
        );
    }
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };

    document.getElementById("subirArchivo").addEventListener("click", subirPincheArhivo);
}

function subirPincheArhivo() {
    var input = document.createElement('input');
    input.type = 'file';

    input.onchange = e => {
        var file = e.target.files[0];
        document.getElementById("archivo").value = file.name;
    }

    input.click();
}

function verCalificacion(input, campoEquipoSelect, tipoInfProt) {

    // Equipo seleccionado antes de dar click a ver calificación
    var equipoSeleccionado = document.getElementById(campoEquipoSelect).value;

    // Obteniendo los valores preestablecidos para llenar el formulario
    // const equiposHTML = obtenerDatosSelect("equipoVer", "Código Equipo", equipos, equipoSeleccionado);

    // Parámetros que cambian dependiendo del tipo de informe y prototipo
    var contenido; var informePrototipo; var criterios;

    if (tipoInfProt == "Informe Inicial" || tipoInfProt == "Informe de Progreso" || tipoInfProt == "Informe Final") {

        contenido = `
         <div id="datosEquipos" class="campos">
            <label for="equipoVer"> Código Equipo </label>
            <input type="text" id="equipoVer" disabled value="${equipoSeleccionado}">
         </div>

         <h2 class="subtituloForm"> Secciones </h2>
         <div id="datosSeccionesVer" class="tabla"> </div>

         <div id="datosVerCalificacion" class="campos">

             <label for="tema"> Tema </label>
             <input type="text" id="tema" disabled>
     `
        switch (tipoInfProt) {
            case "Informe Inicial":
                contenido += `
                 <label for="idea"> Idea de Desarrollo </label>
                 <textarea id="idea" disabled></textarea>
             `
                informePrototipo = informesIniciales;
                criterios = criteriosInicial;
                break;

            case "Informe de Progreso":
                contenido += `
                 <label for="avance"> Avance </label>
                 <textarea id="avance" disabled></textarea>
             `
                informePrototipo = informesProgreso;
                criterios = criteriosProgreso;
                break;

            case "Informe Final":
                contenido += `
                 <label for="conclusion"> Conclusión </label>
                 <textarea id="conclusion" disabled></textarea>
             `
                informePrototipo = informesFinales;
                criterios = criteriosFinal;
                break;
        }
        contenido += `
            <label for="estado"> Estado </label>
            <input type="text" id="estado" disabled>
            
            <label for="archivo"> Archivo </label>
            <input type="text" id="archivo" disabled>
        </div>`
    }
    else {
        contenido = `
        <div id="datosEquipos" class="campos">
            <label for="equipoVer"> Código Equipo </label>
            <input type="text" id="equipoVer" disabled value="${equipoSeleccionado}">
        </div>

         <div id="datosVerCalificacion" class="campos">

             <label for="link"> Link </label>
             <input type="url" id="link" disabled>

             <label for="calidad"> Calidad </label>
             <input type="text" id="calidad" disabled>
        </div>
        `
        if (tipoInfProt == "Prototipo Alpha") {
            informePrototipo = prototiposAlpha;
            criterios = criteriosAlpha;

        } else {
            informePrototipo = prototiposBeta;
            criterios = criteriosBeta;

            contenido += `
            
            <h2 class='subtituloForm'> Revisión </h2>

            <div id="datosVerRevision" class="campos">

                <label for="valoracion"> Valoración </label>
                <textarea id="valoracion" disabled></textarea>

                <label for="comentario"> Comentario </label>
                <textarea id="comentario" disabled></textarea>
                
            </div>
            `
        }
    }

    contenido += `
        <h2 class='subtituloForm'> Rubrica ${tipoInfProt} </h2>
        
        <div id="datosCalificarRubrica" class="campos">

            <label for="nota"> Nota de la Rúbrica </label>
            <input type="number" id="nota" min="0" disabled>

        </div>

        <h3 class="subsubtituloForm"> Criterios de Evaluación y Calificación </h3>

        <div id="columnas" class="titulosTabla">
            <label> Nombre </label>
            <label> Descripción </label>
            <label> Valoración </label>
            <label> Comentario </label>
            <label> Nota </label>
            <label> Peso (%) </label>
        </div>

        <div id="datosCriteriosVer" class="tablaCriterios"> </div>

        <button id="cerrarForm2" type="button" class="botonCerrar"> Cerrar </button>
    `
    // Juntando los datos del formulario
    document.getElementById("barraForm2").innerHTML = `<h1 class='tituloForm'> Ver ${tipoInfProt} </h1>`
    document.getElementById("Form2").innerHTML = `${contenido}`;

    if (tipoInfProt == "Informe Inicial" || tipoInfProt == "Informe de Progreso" || tipoInfProt == "Informe Final") {
        document.getElementById("datosSeccionesVer").style.gridTemplateColumns = "1fr";
    }

    document.getElementById("columnas").style.gridTemplateColumns = "60px 100px 70px 100px 30px 32px";
    document.getElementById("datosCriteriosVer").style.gridTemplateColumns = "60px 100px 70px 100px 30px 32px";

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm2");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("cerrarForm2").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    // document.getElementById("equipo").addEventListener("change",
    //     () => {

    //         actualizarCamposSelect("equipoVer", "datosVerCalificacion", informePrototipo);
    //         if (informePrototipo[equipoSeleccionado] != undefined) { document.getElementById("nota").value = informePrototipo[equipoSeleccionado].rubrica.nota.toFixed(2); }
    //         llenarTablaSelect(document.getElementById("equipoVer").value, "datosCriteriosVer", informePrototipo, "CriteriosVerCalifica", criterios);

    //         if (tipoInfProt == "Informe Inicial" || tipoInfProt == "Informe de Progreso" || tipoInfProt == "Informe Final") {
    //             llenarTablaSelect(document.getElementById("equipoVer").value, "datosSeccionesVer", informePrototipo, "Secciones");
    //         }

    //         // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    //         expansionTextAreaDisabled(document.querySelector("#datosVerCalificacion").querySelectorAll("textarea"));
    //         expansionTextAreaDisabled(document.querySelector("#datosCriteriosVer").querySelectorAll("textarea"));
    //     }
    // );
    actualizarCamposSelect("equipoVer", "datosVerCalificacion", informePrototipo);

    if (tipoInfProt == "Prototipo Beta") {
        actualizarCamposSelect("equipoVer", "datosVerRevision", revisiones);
        expansionTextAreaDisabled(document.querySelector("#datosVerRevision").querySelectorAll("textarea"));
    }

    if (informePrototipo[equipoSeleccionado] != undefined) {
        if (informePrototipo[equipoSeleccionado].rubrica != undefined) {
            document.getElementById("nota").value = informePrototipo[equipoSeleccionado].rubrica.nota.toFixed(2);
        }
    }
    llenarTablaSelect(document.getElementById("equipoVer").value, "datosCriteriosVer", informePrototipo, "CriteriosVerCalifica", criterios);

    if (tipoInfProt == "Informe Inicial" || tipoInfProt == "Informe de Progreso" || tipoInfProt == "Informe Final") {
        llenarTablaSelect(document.getElementById("equipoVer").value, "datosSeccionesVer", informePrototipo, "Secciones");
    }

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    expansionTextAreaDisabled(document.querySelector("#datosVerCalificacion").querySelectorAll("textarea"));
    expansionTextAreaDisabled(document.querySelector("#datosCriteriosVer").querySelectorAll("textarea"));
}

function verRetroalimentacion(input, campoEquipoSelect) {

    // Equipo seleccionado antes de dar click a ver calificación
    var equipoSeleccionado = document.getElementById(campoEquipoSelect).value;

    // Obteniendo los valores preestablecidos para llenar el formulario
    // const equiposHTML = obtenerDatosSelect("equipoVer", "Código Equipo", equipos, equipoSeleccionado);

    // Llenando los datos del formulario
    document.getElementById("barraForm2").innerHTML = "<h1 class='tituloForm'> Ver Retroalimentación </h1>"

    document.getElementById("Form2").innerHTML = `
        <div id="datosEquipos" class="campos">
            <label for="equipoVer"> Código Equipo </label>
            <input type="text" id="equipoVer" disabled value="${equipoSeleccionado}">
        </div>

        <div id="datosPrototipoAlpha" class="campos">

            <label for="link"> Link </label>
            <input type="text" id="link" disabled>
            
        </div>

        <div id="columnas" class="titulosTabla">
            <label> Criterio </label>
            <label> Valoracion </label>
            <label> Sugerencia </label>
        </div>

        <div id="datosRetroalimentacionVer" class="tablaCriterios"> </div>

        <button id="cerrarForm2" type="button" class="botonCerrar"> Cerrar </button>
    `;
    // document.getElementById("datosEquipos").style.gridTemplateColumns = "60px 1fr";
    // document.getElementById("datosPrototipoAlpha").style.gridTemplateColumns = "60px 1fr";
    document.getElementById("columnas").style.gridTemplateColumns = "100px 100px 100px";
    document.getElementById("datosRetroalimentacionVer").style.gridTemplateColumns = "100px 100px 100px";

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm2");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("cerrarForm2").onclick = () => { divform.style.display = "none" };
    // document.getElementById("equipoVer").addEventListener("change",
    //     () => {
    //         actualizarCamposSelect("equipoVer", "datosPrototipoAlpha", prototiposAlpha);
    //         actualizarCamposSelect("equipoVer", "datosRetroalimentacion", retroalimentaciones);
    //     }
    // );

    actualizarCamposSelect("equipoVer", "datosPrototipoAlpha", prototiposAlpha);
    llenarTablaSelect(document.getElementById("equipoVer").value, "datosRetroalimentacionVer", retroalimentaciones, "TablaRetroalimentacion");

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    expansionTextAreaDisabled(document.querySelector("#datosRetroalimentacionVer").querySelectorAll("textarea"));
}

function formularioCalificaInformePrototipo(input, tipoInfProt) {

    // Checkeacion de tipo de usuario
    if (!controladorRelacionDinamica("Profesor")) { return; }

    // Parámetros que cambian dependiendo del tipo de informe y prototipo
    var contenido; var informePrototipo; var criterios;

    // Obteniendo los valores preestablecidos para llenar el formulario
    const equiposHTML = obtenerDatosSelect("equipo", "Código Equipo", equipos);
    const estadosHTML = obtenerDatosSelect("estado", "Estado", { Incompleto: {}, Completo: {} });
    const calidadHTML = obtenerDatosSelect("calidad", "Calidad", { Baja: {}, Media: {}, Alta: {} });

    if (tipoInfProt == "Informe Inicial" || tipoInfProt == "Informe de Progreso" || tipoInfProt == "Informe Final") {

        contenido = `
            <div class="ayuda" id="ayuda">
                <p> 
                    Por favor seleccione el código equipo, seleccione el estado, ingrese las valoraciones (cualitativas), los comentarios 
                    y las notas según los criterios de evaluación, y dé clic en el botón “Calificar” para guardar los datos
                </p>
            </div>

            <div id="datosEquipos" class="campos">
                ${equiposHTML}
            </div>

            <h2 class="subtituloForm" style="margin-top: 5px;"> Secciones </h2>
            <div id="datosSecciones" class="tabla"> </div>

            <div id="datosCalifica" class="campos">

                <label for="tema"> Tema </label>
                <textarea id="tema" disabled></textarea>
        `
        switch (tipoInfProt) {
            case "Informe Inicial":
                contenido += `
                    <label for="idea"> Idea de Desarrollo </label>
                    <textarea id="idea" disabled></textarea>
                `
                informePrototipo = informesIniciales;
                criterios = criteriosInicial;
                break;

            case "Informe de Progreso":
                contenido += `
                    <label for="avance"> Avance </label>
                    <textarea id="avance" disabled></textarea>
                `
                informePrototipo = informesProgreso;
                criterios = criteriosProgreso;
                break;

            case "Informe Final":
                contenido += `
                    <label for="conclusion"> Conclusión </label>
                    <textarea id="conclusion" disabled></textarea>
                `
                informePrototipo = informesFinales;
                criterios = criteriosFinal;
                break;
        }

        contenido += `
            <label for="archivo"> Archivo </label>
            <input type="text" id="archivo" disabled>
            ${estadosHTML} 
        </div>`

    }
    else {
        contenido = `
            <div class="ayuda" id="ayuda">
                <p> 
                    Por favor seleccione el código equipo, seleccione la calidad, ingrese las valoraciones (cualitativas), los comentarios 
                    y las notas según los criterios de evaluación, y dé clic en el botón “Calificar” para guardar los datos
                </p>
            </div>
            
            <div id="datosCalifica" class="campos">
            
                ${equiposHTML}

                <label for="link"> Link </label>
                <input type="url" id="link" disabled>

                ${calidadHTML}
                
            </div>
        `
        if (tipoInfProt == "Prototipo Alpha") {
            informePrototipo = prototiposAlpha;
            criterios = criteriosAlpha;
        } else {
            informePrototipo = prototiposBeta;
            criterios = criteriosBeta;
        }
    }

    contenido += `
        <h2 class='subtituloForm'> Rubrica ${tipoInfProt} </h2>
        
        <div id="datosCalificarRubrica" class="campos">

            <label for="nota"> Nota de la Rúbrica </label>
            <input type="number" id="nota" min="0" value="0" disabled>

        </div>

        <h3 class="subsubtituloForm"> Criterios de Evaluación y Calificación </h3>

        <div id="columnas" class="titulosTabla">
            <label> Nombre </label>
            <label> Descripción </label>
            <label> Valoración </label>
            <label> Comentario </label>
            <label> Nota </label>
            <label> Peso (%) </label>
        </div>

        <div id="datosCriteriosEval" class="tablaCriterios"> </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Calificar </button>
            <button id="reset" type="button" class="botonBorrar"> Limpiar Campos </button>
        </div>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `
    // Juntando los datos del formulario
    document.getElementById("barraForm1").innerHTML = `<h1 class='tituloForm'> Califica ${tipoInfProt} </h1>`
    document.getElementById("Form1").innerHTML = `${contenido}`;

    if (tipoInfProt == "Informe Inicial" || tipoInfProt == "Informe de Progreso" || tipoInfProt == "Informe Final") {
        document.getElementById("datosSecciones").style.gridTemplateColumns = "1fr";
    }

    document.getElementById("columnas").style.gridTemplateColumns = "60px 100px 70px 100px 30px 32px";
    document.getElementById("datosCriteriosEval").style.gridTemplateColumns = "60px 100px 70px 100px 30px 32px";
    document.getElementById("ayuda").style.width = "400px";

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            var equipo = document.getElementById("equipo").value;
            if (tipoInfProt == "Informe Inicial" || tipoInfProt == "Informe de Progreso" || tipoInfProt == "Informe Final") {
                guardarDatos([document.getElementById("estado"), document.getElementById("nota")], "Califica_" + tipoInfProt,
                    equipo, document.querySelector("#datosCriteriosEval").querySelectorAll("input, textarea, label"));
            } else {
                guardarDatos([document.getElementById("calidad"), document.getElementById("nota")], "Califica_" + tipoInfProt,
                    equipo, document.querySelector("#datosCriteriosEval").querySelectorAll("input, textarea, label"));
            }
            var nota = 0;
            if (informesIniciales[equipo] != undefined) {
                if (informesIniciales[equipo].rubrica != undefined) {
                    nota += informesIniciales[equipo].rubrica.nota;
                }
            }
            if (informesProgreso[equipo] != undefined) {
                if (informesProgreso[equipo].rubrica != undefined) {
                    nota += informesProgreso[equipo].rubrica.nota;
                }
            }
            if (informesFinales[equipo] != undefined) {
                if (informesFinales[equipo].rubrica != undefined) {
                    nota += informesFinales[equipo].rubrica.nota;
                }
            }
            if (prototiposAlpha[equipo] != undefined) {
                if (prototiposAlpha[equipo].rubrica != undefined) {
                    nota += prototiposAlpha[equipo].rubrica.nota;
                }
            }
            if (prototiposBeta[equipo] != undefined) {
                if (prototiposBeta[equipo].rubrica != undefined) {
                    nota += prototiposBeta[equipo].rubrica.nota;
                }
            }
            nota /= 5;
            if (nota <= 3) {
                equipos[equipo].calidad = "baja";
            }
            else if (nota <= 4) {
                equipos[equipo].calidad = "media";
            }
            else if (nota <= 5) {
                equipos[equipo].calidad = "alta";
            }
        }
    );
    document.getElementById("reset").onclick =
        () => {
            if (tipoInfProt == "Informe Inicial" || tipoInfProt == "Informe de Progreso" || tipoInfProt == "Informe Final") {
                document.getElementById("estado").value = "Incompleto";
            }
            else {
                document.getElementById("calidad").value = "Baja";
            }

            document.getElementById("nota").value = "0";

            Array.from(document.querySelector("#datosCriteriosEval").querySelectorAll("input, textarea")).forEach(
                (campo) => { if (campo.disabled == false) { campo.value = ""; } }
            )
        };
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };

    // Añadiendo escuchador de listas desplegables y ejecutandola pa los datos iniciales
    document.getElementById("equipo").addEventListener("change",
        () => {
            actualizarCamposSelect("equipo", "datosCalifica", informePrototipo);
            llenarTablaSelect(document.getElementById("equipo").value, "datosCriteriosEval", criterios, "CriteriosCalifica")

            if (tipoInfProt == "Informe Inicial" || tipoInfProt == "Informe de Progreso" || tipoInfProt == "Informe Final") {
                llenarTablaSelect(document.getElementById("equipo").value, "datosSecciones", informePrototipo, "Secciones")
            }

            // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
            expansionTextAreaDisabled(document.querySelector("#datosCalifica").querySelectorAll("textarea"));
            expansionTextAreaDisabled(document.querySelector("#datosCriteriosEval").querySelectorAll("textarea"));

            // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
            AsignacionExpansionTextArea(document.querySelector("#datosCriteriosEval").querySelectorAll("textarea"));
        }
    );
    actualizarCamposSelect("equipo", "datosCalifica", informePrototipo);
    llenarTablaSelect(document.getElementById("equipo").value, "datosCriteriosEval", criterios, "CriteriosCalifica")

    if (tipoInfProt == "Informe Inicial" || tipoInfProt == "Informe de Progreso" || tipoInfProt == "Informe Final") {
        llenarTablaSelect(document.getElementById("equipo").value, "datosSecciones", informePrototipo, "Secciones")
    }

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    expansionTextAreaDisabled(document.querySelector("#datosCalifica").querySelectorAll("textarea"));
    expansionTextAreaDisabled(document.querySelector("#datosCriteriosEval").querySelectorAll("textarea"));

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    AsignacionExpansionTextArea(document.querySelector("#datosCriteriosEval").querySelectorAll("textarea"));
}

function formularioRealizaRetroalimentacion(input) {

    // Checkeacion de tipo de usuario
    if (!controladorRelacionDinamica("Representante")) { return; }

    // Obteniendo los valores preestablecidos para llenar el formulario
    // const equiposHTML = obtenerDatosSelect("equipo", "Código Equipo", equipos, undefined,undefined,"empresa");   
    var equiposHTML = `<label for='equipo'> Código Equipo </label> <select id='equipo'>`;
    for (var [key, value] of Object.entries(equipos)) {
        if (usuarioActivo.datos.empresa == key.split(" ")[0]) {
            equiposHTML += `<option value='${key}'> ${key} </option>`;
        }
    }
    equiposHTML += "</select>";

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Realiza Retroalimentación </h1>"

    document.getElementById("Form1").innerHTML = `
        <div class="ayuda" id="ayuda">
            <p> 
                Por favor seleccione el código equipo, y de clic en el “+” por cada criterio, valoración (cualitativa) 
                y sugerencia que desee agregar, una vez ingresada esta información dé clic en el botón “Realizar” para guardar los datos
            </p>
        </div>

        <div id="datosRetroalimentacion" class="campos">

            ${equiposHTML}

            <label for="link"> Link </label>
            <input type="text" id="link" disabled>

        </div>

        <img class="iconos" src="Iconos/Nuevo.png" title="Agregar" id="agregar"/>

        <div id="columnas" class="titulosTabla">
            <label> Criterio </label>
            <label> Valoracion </label>
            <label> Sugerencia </label>
            <label> Remover </label>
        </div>

        <div id="datosRetro" class="tablaCriterios"> </div>
        
        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Realizar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
        </div>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;

    document.getElementById("columnas").style.gridTemplateColumns = "100px 100px 100px 70px";
    document.getElementById("datosRetro").style.gridTemplateColumns = "100px 100px 100px 70px";
    document.getElementById("ayuda").style.width = "370px";

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    llenarBotonesExpansibles("agregar", "datosRetro", [["textarea", "criterio"], ["textarea", "valoracion"], ["textarea", "sugerencia"]],
        "100px 100px 100px 70px", "Remover");

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    AsignacionExpansionTextArea(document.querySelector("#datosRetroalimentacion").querySelectorAll("textarea"));

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("equipo").addEventListener("change",
        () => {
            actualizarCamposSelect("equipo", "datosRetroalimentacion", prototiposAlpha);
        }
    );
    actualizarCamposSelect("equipo", "datosRetroalimentacion", prototiposAlpha);

    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosRetro").querySelectorAll("textarea"), "Retroalimentacion", document.getElementById("equipo").value);
        }
    );
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function formularioRealizaRevision(input) {

    // Checkeacion de tipo de usuario
    if (!controladorRelacionDinamica("Representante")) { return; }

    // Obteniendo los valores preestablecidos para llenar el formulario
    // const equiposHTML = obtenerDatosSelect("equipo", "Código Equipo", equipos);
    var equiposHTML = `<label for='equipo'> Código Equipo </label> <select id='equipo'>`;
    for (var [key, value] of Object.entries(equipos)) {
        if (usuarioActivo.datos.empresa == key.split(" ")[0]) {
            equiposHTML += `<option value='${key}'> ${key} </option>`;
        }
    }
    equiposHTML += "</select>";

    // Llenando los datos del formulario
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Revisa Prototipo Beta </h1>"

    document.getElementById("Form1").innerHTML = `
        <div class="ayuda">
            <p> 
                Por favor seleccione el código equipo, ingrese la valoración (cualitativa) y el comentario, y dé 
                clic en el botón “Revisar” para guardar los datos
            </p>
        </div>

        <div id="datosRevision" class="campos">

            ${equiposHTML}

            <label for="link"> Link </label>
            <input type="text" id="link" disabled>

            <label for="valoracion"> Valoración </label>
            <textarea id="valoracion"></textarea>

            <label for="comentario"> Comentario </label>
            <textarea id="comentario"></textarea>

        </div>

        <div class="botones">
            <button id="confirmarForm1" type="button" class="botonConfirmar"> Revisar </button>
            <button type="reset" class="botonBorrar"> Limpiar Campos </button>
        </div>
        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;

    // Mostrando el formulario y ubicándolo en la posición adecuada
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
    AsignacionExpansionTextArea(document.querySelector("#datosRevision").querySelectorAll("textarea"));

    // Añadiendo los escuchadores de cada botón (el de reiniciar campos no hace falta)
    document.getElementById("equipo").addEventListener("change",
        () => {
            actualizarCamposSelect("equipo", "datosRevision", prototiposBeta);
        }
    );
    actualizarCamposSelect("equipo", "datosRevision", prototiposBeta);

    document.getElementById("confirmarForm1").addEventListener("click",
        () => {
            guardarDatos(document.querySelector("#datosRevision").querySelectorAll("select, input, textarea"), "Revision", undefined, undefined,
                [false, false, true, true]);
        }
    );
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };
}

function actualizarCamposSelect(nombreSelect, nombreContenedorCampos, arreglo, buscaAtributo = undefined, devuelveAtributo = undefined, condicionLlaveDirecta = false) {

    var llave;
    if (!condicionLlaveDirecta) {
        llave = document.getElementById(nombreSelect).value;
    }
    else {
        llave = nombreSelect
    }

    var campos = document.querySelector("#" + nombreContenedorCampos).querySelectorAll("input, textarea, select");
    var condicionEncontracion = false;

    // Poniendo iniialmente todos los valores vacíos
    campos.forEach(
        (campo) => {
            if (campo.type != "select-one") {
                campo.value = "";
            }
        }
    );

    if (llave != "") {
        if (buscaAtributo == undefined) {
            for (var [key, value] of Object.entries(arreglo)) {
                if (llave == key) {//ARREGLAR ESTO
                    for (var [key, value2] of Object.entries(value)) {
                        var element = Array.from(campos).find(
                            (campo) => {
                                return campo.id == key;
                            }
                        );
                        if (element != undefined) {

                            if (element.type != "select-one") {
                                if (devuelveAtributo == undefined) {
                                    element.value = value2;
                                }
                                else {
                                    element.value = value2[devuelveAtributo];
                                }
                            }
                            else {
                                var element = Array.from(element).find(
                                    (campo) => {
                                        return campo.value == value2;
                                    }
                                );
                                if (element != undefined) {
                                    element.selected = true;
                                }
                            }
                        }
                    }
                    condicionEncontracion = true;
                    break;
                }
            }
        }
        else {
            for (var [key, value] of Object.entries(arreglo)) {
                if (llave == value[buscaAtributo]) {
                    for (var [key, value2] of Object.entries(value)) {
                        var element = Array.from(campos).find(
                            (campo) => {
                                return campo.id == key;
                            }
                        );
                        if (element != undefined) {
                            if (element.type != "select-one") {
                                if (devuelveAtributo == undefined) {
                                    element.value = value2;
                                }
                                else {
                                    element.value = value2[devuelveAtributo];
                                }
                            }
                            else {
                                var element = Array.from(element).find(
                                    (campo) => {
                                        return campo.value == value2;
                                    }
                                );
                                element.selected = true;
                            }
                        }
                    }
                    condicionEncontracion = true;
                    break;
                }
            }
        }
    }
    if (!condicionEncontracion) {
        campos.forEach(
            (campo) => {
                if (campo.type != "select-one") {
                    campo.value = "";
                }
            }
        );
    }
}

function llenarTablaSelect(llave, nombreContenedorCampos, arreglo = undefined, caso, dobleObjeto = undefined) {

    var acumulador = "";

    if (arreglo[Object.keys(arreglo)[0]] != undefined) {
        switch (caso) {
            case "Clases":

                if (llave == "") {
                    // llave = arreglo[Object.keys(arreglo)[0]].asignatura;
                    break;
                }
                for (var [key, value] of Object.entries(arreglo)) {
                    if (value.asignatura == llave) {
                        acumulador += `
                            <label> ${value.contenido} </label>
                            <label> ${value.numero} </label>
                            <label> ${value.tematica} </label>
                        `;
                    }
                }
                break;

            case "Contenidos":

                for (var [key, value] of Object.entries(arreglo)) {
                    acumulador += `<label> ${value} </label>`;
                }
                break;

            case "Criterios":

                var Objeto;

                switch (llave) {
                    case "Informe Inicial":
                        Objeto = criteriosInicial;
                        break;
                    case "Informe de Progreso":
                        Objeto = criteriosProgreso;
                        break;
                    case "Informe Final":
                        Objeto = criteriosFinal;
                        break;
                    case "Prototipo Alpha":
                        Objeto = criteriosAlpha;
                        break;
                    case "Prototipo Beta":
                        Objeto = criteriosBeta;
                        break;
                }

                // const llaves = [["nombre", "label", ""], ["descripcion", "textarea", "disabled"], ["valoracion", "label", ""],
                // ["comentario", "textarea", "disabled"], ["nota", "label", ""], ["peso", "label", ""]]

                const llaves = [["nombre", "label", ""], ["descripcion", "textarea", "disabled"], ["peso", "label", ""]]
                var totalPeso = 0;
                // Recorre todos los criterios
                for (var value of Object.values(Objeto)) {

                    // Recorre los atributos deseados de los criterios
                    for (let index = 0; index < llaves.length; index++) {

                        var condicionEncontracion = false;

                        // Recorre los atributos del criterio pa ver si estan o no definidos
                        for (var [key, value2] of Object.entries(value)) {
                            if (llaves[index][0] == key) {
                                acumulador += `<${llaves[index][1]} ${llaves[index][2]}>${value2}</${llaves[index][1]}>`;
                                if (key == "peso") { totalPeso += parseFloat(value2) }
                                condicionEncontracion = true;
                                break;
                            }
                        }
                        if (!condicionEncontracion) { acumulador += `<label> ${" "} </label>`; }
                    }
                }
                document.getElementById("pesoTotal").value = totalPeso + "%";
                break;

            case "Historia":

                if (llave == "") {
                    llave = Object.keys(arreglo)[0];
                }

                if (arreglo[llave].historia != undefined) {

                    var id = 1;
                    for (var [key, value] of Object.entries(arreglo[llave].historia.asignaturasHist)) {

                        acumulador += `
                            <label> ${value["nombre_" + id]} </label>
                            <label> ${value["nota_" + id]} </label>
                            <label> ${value["semestre_" + id]} </label>
                        `;
                        id++;
                    }
                }
                break;

            case "Equipo":

                if (llave == "") {
                    llave = Object.keys(arreglo)[0];
                }

                for (var [key, value] of Object.entries(arreglo[llave].integrantes)) {

                    acumulador += `
                        <label> ${estudiantes[value].nombre} </label>
                        <label> ${value} </label>
                    `;
                    id++;
                }
                break;

            case "CriteriosVerCalifica":

                var auxA = []; var cantidadCriterios = 0;
                for (var value of Object.values(dobleObjeto)) {
                    cantidadCriterios++;
                    auxA.push(`<label> ${value.nombre} </label>`);
                    auxA.push(`<textarea disabled>${value.descripcion}</textarea>`);
                    auxA.push(`<label> ${value.peso} </label>`)
                }

                if (arreglo[llave].rubrica != undefined) {
                    var auxB = [];
                    for (var value of Object.values(arreglo[llave].rubrica.criterios)) {
                        auxB.push(`<textarea disabled>${value.valoracion}</textarea>`);
                        auxB.push(`<textarea disabled>${value.comentario}</textarea>`);
                        auxB.push(`<label> ${value.nota} </label>`)
                    }
                    for (let index = 0; index < cantidadCriterios; index++) {
                        acumulador += `${auxA[index * 3]} ${auxA[(index * 3) + 1]} ${auxB[index * 3]} ${auxB[(index * 3) + 1]} ${auxB[(index * 3) + 2]} ${auxA[(index * 3) + 2]}`;
                    }
                } else {
                    for (let index = 0; index < cantidadCriterios; index++) {
                        acumulador += `${auxA[index * 3]} ${auxA[(index * 3) + 1]} <label> ${" "} </label> <label> ${" "} </label> <label> ${" "} </label> ${auxA[(index * 3) + 2]}`;
                    }
                }
                break;

            case "CriteriosCalifica":

                for (var value of Object.values(arreglo)) {
                    acumulador += `
                        <label> ${value.nombre} </label>
                        <textarea disabled>${value.descripcion}</textarea>
                        <input type="text" id="valoracion">
                        <textarea id="comentario"></textarea>
                        <input type="number" id="nota" min="0" max="5">
                        <label> ${value.peso} </label>
                    `;
                }
                break;

            case "Secciones":

                if (llave == "") {
                    llave = arreglo[Object.keys(arreglo)[0]];
                }
                if (arreglo[llave] != undefined) {
                    for (var value of Object.values(arreglo[llave].secciones)) {
                        acumulador += `<label> ${value} </label>`;
                    }
                }
                break;

            case "TablaRetroalimentacion":

                var id = 1;
                for (var [key, value] of Object.entries(arreglo[llave])) {

                    acumulador += `
                        <textarea disabled> ${value["criterio_" + id]} </textarea>
                        <textarea disabled> ${value["valoracion_" + id]} </textarea>
                        <textarea disabled> ${value["sugerencia_" + id]} </textarea>
                    `;
                    id++;
                }
                break;
        }
    }
    document.getElementById(nombreContenedorCampos).innerHTML = acumulador;
}

function llenarBotonesExpansibles(idBotonDisparo, idDivContenido, arregloTipoInputs, columnas, nombreBotonRemover, nombreBotonExtra = undefined,
    funcionBotonExtra = undefined, campoIncrementable = undefined) {

    document.getElementById(idBotonDisparo).addEventListener("click",
        () => {

            var condicionMaximo = false;
            if (campoIncrementable != undefined) {
                if (parseInt(document.getElementById(campoIncrementable).value) + 1 > 6) {
                    condicionMaximo = true;
                    alert("Se debe registrar un máximo de 6 estudiates por equipo");
                }
            }
            if (!condicionMaximo) {
                const identificador = indicesBotonesExpansibles(idDivContenido, arregloTipoInputs);

                var div = document.getElementById(idDivContenido);
                div.style.gridTemplateColumns = columnas;

                // [[tipo input, prefijoID, objetoLista]]
                var auxiliar = []
                arregloTipoInputs.forEach(
                    (input) => {

                        if (input[0] == "input" || input[0] == "textarea") {
                            var campo = document.createElement(input[0]);
                            if (input[0] == "input") { campo.setAttribute("type", input[2]); }
                            campo.setAttribute("id", input[1] + '_' + identificador);

                            // Minimo y máximo si es input tipo número y jueron ingresados
                            if (input[0] == "input") {
                                if (input[2] == "number") {
                                    if (input[3] != undefined) {
                                        campo.setAttribute("min", input[3]);
                                    }
                                    if (input[4] != undefined) {
                                        campo.setAttribute("max", input[4]);
                                    }
                                }
                            }

                            div.appendChild(campo); auxiliar.push(campo);

                            if (input[0] == "textarea") {
                                // Añadiendo escuchador pa q los text area crezcan según el texto ingresado
                                AsignacionExpansionTextArea(document.querySelector(`#${idDivContenido}`).querySelectorAll("textarea"));
                            }
                        }

                        else if (input[0] == "select") {
                            var campo = document.createRange().createContextualFragment(obtenerDatosSelect(input[1] + '_' + identificador, "", input[2], undefined,
                                "nombre"));
                            div.appendChild(campo);
                            auxiliar.push(document.querySelector(`#${input[1]}_${identificador}`));
                        }
                    }
                );

                if (nombreBotonExtra != undefined) {
                    var botonExtra = document.createElement("button");
                    botonExtra.setAttribute("type", "button");
                    botonExtra.setAttribute("class", "botonExtraTabla");
                    botonExtra.innerHTML = nombreBotonExtra;
                    botonExtra.addEventListener("click",
                        () => {
                            funcionBotonExtra(event, auxiliar[0].value)
                        }
                    )
                }

                var boton = document.createElement("button");
                boton.setAttribute("type", "button");
                boton.setAttribute("class", "botonRemover");
                boton.innerHTML = nombreBotonRemover
                boton.addEventListener("click",
                    () => {
                        auxiliar.forEach((campo) => { campo.remove(); });
                        if (nombreBotonExtra != undefined) { botonExtra.remove(); }
                        boton.remove();

                        const identificador = indicesBotonesExpansibles(idDivContenido, arregloTipoInputs);

                        if (campoIncrementable != undefined) {
                            document.getElementById(campoIncrementable).value = identificador - 1;
                        }
                    }
                )
                if (nombreBotonExtra != undefined) {
                    div.appendChild(botonExtra); div.appendChild(boton);
                }
                else {
                    div.appendChild(boton);
                }

                if (campoIncrementable != undefined) {
                    document.getElementById(campoIncrementable).value = identificador;
                }
            }
        }
    );
}

function indicesBotonesExpansibles(idDivContenido, arregloTipoInputs) {

    var identificador = 1;
    var auxiliar = document.querySelector(`#${idDivContenido}`).querySelectorAll("input, select, textarea");

    for (let index = 0; index < auxiliar.length; index = index) {
        arregloTipoInputs.forEach(
            (input) => {
                auxiliar[index].id = input[1] + '_' + identificador
                index++;
            }
        )
        identificador++;
    }
    return identificador;
}

function obtenerDatosSelect(id, display, arreglo, seleccionado = "", atributoPorMostrar = undefined, atributoCondicional = undefined, valoresAtributoCondicional = undefined,
    arregloComparacion = undefined, mostrarValue = false) {

    if (display != "") {
        var salidaHTML = `<label for='${id}'> ${display} </label> <select id='${id}'>`;
    }
    else {
        var salidaHTML = `<select id='${id}'>`;
    }
    if (arreglo[Object.keys(arreglo)[0]] != undefined) {
        var aux;

        for (var [key, value] of Object.entries(arreglo)) {

            if (mostrarValue) {
                aux = value;
            }
            else if (atributoPorMostrar == undefined) {
                aux = key
            }
            else {
                aux = value[atributoPorMostrar];
            }
            if (atributoCondicional == undefined) {
                if (key == seleccionado) {
                    salidaHTML += `<option value='${key}' selected> ${aux} </option>`;
                }
                else {
                    salidaHTML += `<option value='${key}'> ${aux} </option>`;
                }
            }
            else {
                if (arregloComparacion == undefined) {
                    if (valoresAtributoCondicional.find((opcion) => opcion == value[atributoCondicional])) {
                        if (key == seleccionado) {
                            salidaHTML += `<option value='${key}' selected> ${aux} </option>`;
                        }
                        else {
                            salidaHTML += `<option value='${key}'> ${aux} </option>`;
                        }
                    }
                }
                else {
                    if (valoresAtributoCondicional.find((opcion) => opcion == arregloComparacion[key][atributoCondicional])) {
                        if (key == seleccionado) {
                            salidaHTML += `<option value='${key}' selected> ${aux} </option>`;
                        }
                        else {
                            salidaHTML += `<option value='${key}'> ${aux} </option>`;
                        }
                    }
                }
            }
        }
    }
    salidaHTML += "</select>";
    return salidaHTML;
}

function guardarDatos(input, caso, llave = input[0].value, nuevoAgrega = undefined, AgregaConCondicion = undefined) {

    var errorIngresoDatos = false; var condicionAlertacion = true; var condicionPlural = false; var aparecenRadios = false; var conteoRadiosCheckeados = 0;
    var casoMixto;
    var cadenaAux1, cadenaAux2, cadenaAux3;

    // Esto es para comprobar que se hallan enviado todos los datos
    input.forEach((valor) => {
        if (valor.type != "radio") {
            if (valor.value == '') { errorIngresoDatos = true; }
        }
        else {
            aparecenRadios = true;
            if (valor.checked == true) {
                conteoRadiosCheckeados++;
            }
        }
    });

    if (conteoRadiosCheckeados != 1 && aparecenRadios) {
        errorIngresoDatos = true;
    }

    if (NodeList.prototype.isPrototypeOf(nuevoAgrega) || Array.isArray(nuevoAgrega)) {
        if (nuevoAgrega != undefined) {
            nuevoAgrega.forEach((valor) => {
                if (valor.value == '') { errorIngresoDatos = true; }
            });
        }
    }

    [caso, casoMixto] = caso.split("_")

    if (!errorIngresoDatos) {
        switch (caso) {
            case "Registra":

                var objeto;

                switch (casoMixto) {
                    case "Estudiante":
                        cadenaAux1 = `El estudiante ${llave}`; cadenaAux2 = "registrado";
                        objeto = estudiantes;
                        break;

                    case "Profesor":

                        if (Object.keys(profesores).length == 1) {
                            errorIngresoDatos = true;
                            cadenaAux1 = "Este sistema solo está diseñado para una asignatura con su respectivo profesor, por tanto no puede haber más de un profesor registrado"
                        }
                        else {
                            cadenaAux1 = `El profesor ${llave}`; cadenaAux2 = "registrado";
                            objeto = profesores;
                        }
                        break;

                    case "Semestre":
                        cadenaAux1 = `El semestre`; cadenaAux2 = "registrado";
                        objeto = semestresCod;
                        break;
                }

                if (errorIngresoDatos) { break; }

                if (casoMixto != "Semestre") {
                    objeto[llave] = crearObjeto(input);
                }
                else {
                    objeto.semestres[semestresCod.codigoSemestre] = crearObjeto(input);
                    objeto.semestres[semestresCod.codigoSemestre]["codigo"] = semestresCod.codigoSemestre;
                    semestresCod.codigoSemestre++;
                }
                break;

            case "Asignatura":
                if (Object.keys(asignaturas).length != 1) {
                    cadenaAux1 = `La asignatura ${llave}`; cadenaAux2 = "diseñada"
                    asignaturas[llave] = crearObjeto(input);

                    asignaturas[llave]["contenidos"] = {};
                    adicionarAobjeto(asignaturas[llave]["contenidos"], nuevoAgrega);

                    asignaturas[llave].estado = "Diseñada"
                }
                else {
                    errorIngresoDatos = true;
                    cadenaAux1 = "Este sistema solo está diseñado para una asignatura con su respectivo profesor, por tanto no puede haber más de una asignatura registrado"
                }
                break;

            case "Clase":
                cadenaAux1 = `La clase número ${input[3].value} de la asignatura ${input[0].value}`; cadenaAux2 = "diseñada"
                clases[llave] = crearObjeto(input);

                clases[llave].contenido = asignaturas[input[0].value].contenidos[input[1].value]

                break;

            case "Criterio":
                cadenaAux1 = `El criterio de evaluación "${llave}" de la rubrica del ${input[0].value}`; cadenaAux2 = "definido"
                var objeto;
                switch (input[0].value) {
                    case "Informe Inicial":
                        objeto = criteriosInicial;
                        break;

                    case "Informe de Progreso":
                        objeto = criteriosProgreso;
                        break;

                    case "Informe Final":
                        objeto = criteriosFinal;
                        break;

                    case "Prototipo Alpha":
                        objeto = criteriosAlpha;
                        break;

                    case "Prototipo Beta":
                        objeto = criteriosBeta;
                        break;
                }

                var totalPeso = parseFloat(input[3].value);
                for (var value of Object.values(objeto)) {
                    totalPeso += parseFloat(value.peso);
                }
                if (totalPeso > 100) {
                    cadenaAux1 = "La suma de los pesos de los criterios no puede pasar el 100%"
                    errorIngresoDatos = true;
                }
                else {
                    objeto[llave] = crearObjeto(input);
                }
                break;

            case "Empresa":
                cadenaAux1 = `La empresa ${llave}`; cadenaAux2 = "registrada"
                empresas[llave] = crearObjeto(input);
                break;

            case "Representante":
                condicionAlertacion = false;
                representantes[llave] = crearObjeto(input);

                if (nuevoAgrega != undefined) {
                    adicionarAobjeto(representantes[llave], nuevoAgrega);
                }
                break;

            case "Problema":

                if (nuevoAgrega == undefined) {
                    cadenaAux1 = `El problema de la empresa ${llave}`; cadenaAux2 = "definido"
                }
                else {
                    cadenaAux1 = `El problema de la empresa ${llave}`; cadenaAux2 = "validado"
                }
                problemas[llave] = crearObjeto(input);
                break;

            case "Proyecto":

                cadenaAux1 = `El proyecto de la empresa ${llave}`;
                cadenaAux2 = `agregado`

                carteraDeProyectos.proyectos[llave] = crearObjeto(input);

                var total = 0;
                for (var value of Object.values(carteraDeProyectos.proyectos)) {
                    total++;
                }
                carteraDeProyectos.cantidadProyectos = total;

                break;

            case "Estudiante":
                cadenaAux1 = `La historia académica del estudiante ${input[0].value}`;
                cadenaAux2 = `registrada`

                adicionarAobjeto(estudiantes[llave], input);

                var asignaturasHist = {}; var promedio = 0;
                for (let index = 0; index < nuevoAgrega.length; index += 3) {
                    asignaturasHist[nuevoAgrega[index].id] = crearObjeto(Array.from(nuevoAgrega).slice(index, index + 3));
                    promedio += nuevoAgrega[index + 1].value * 3 / nuevoAgrega.length
                }
                estudiantes[llave]["historia"] = { promedio, asignaturasHist };
                break;

            case "Equipo":

                // Verificando que se halla ingresado al menos un estudiante
                if (nuevoAgrega.length != 0) {
                    var condicionEstudianteRepetidoEntrada = false; var estudianteRepetido;

                    // Buscando estudiantes repetidos entre los valores ingresados
                    Array.from(nuevoAgrega).forEach((estudianteNuevo) => {
                        let dobleHallacion = 0;
                        Array.from(nuevoAgrega).forEach(
                            (estudianteNuevo2) => {
                                if (estudianteNuevo.value == estudianteNuevo2.value) { dobleHallacion++; }
                            }
                        )
                        if (dobleHallacion > 1) {
                            estudianteRepetido = estudiantes[estudianteNuevo.value].nombre;
                            condicionEstudianteRepetidoEntrada = true;
                        }
                    })

                    // Verificando que se no existan estudiantes repetidos entre los valores ingresados
                    if (!condicionEstudianteRepetidoEntrada) {
                        var condicionEstudianteRepetidoEquipo = false; var equipoEstudianteRepetido;

                        // Buscando estudiantes repetidos entre los equipos creados y los valores ingresados
                        for (var [key, value] of Object.entries(equipos)) {
                            for (var value2 of Object.values(value.integrantes)) {
                                if (Array.from(nuevoAgrega).find((estudianteNuevo) => estudianteNuevo.value == value2)) {
                                    estudianteRepetido = estudiantes[value2].nombre;
                                    equipoEstudianteRepetido = key;
                                    condicionEstudianteRepetidoEquipo = true; break;
                                }
                            }
                        }

                        // Verificando que se no existanestudiantes repetidos entre los equipos creados y los valores ingresados
                        if (!condicionEstudianteRepetidoEquipo) {
                            var nuevoNumero = 1; var nombreLlave; var auxiliarNumeroLlave;

                            // Buscando si la empresa relacionada al proyecto se encuentra adscrita a otro equipo para crear otro proyecto relacionada a ella
                            for (var [key, value] of Object.entries(equipos)) {
                                [nombreLlave, auxiliarNumeroLlave] = key.split(" ");
                                if (nombreLlave == llave) {
                                    if (nuevoNumero != auxiliarNumeroLlave) {
                                        break;
                                    }
                                    else {
                                        nuevoNumero++;
                                    }
                                }
                            }
                            llave += ` ${nuevoNumero}`;
                            equipos[llave] = {};
                            equipos[llave]["cantidad"] = input[1].value;
                            [equipos[llave]["integrantes"], cadenaAux1] = crearObjeto(nuevoAgrega, undefined, estudiantes, "nombre");
                            equipos[llave]["calidad"] = "";

                            cadenaAux1 = `El equipo identificado con el código "${llave}" y compuesto por los estudiantes ${cadenaAux1}`;
                            cadenaAux2 = `conformado`
                        }
                        else {
                            errorIngresoDatos = true
                            cadenaAux1 = `Un estudiante no puede pertenecer a mas de un equipo a la vez, el estudiante ${estudianteRepetido} ya se encuentra ` +
                                `inscrito en el equipo ${equipoEstudianteRepetido}`;
                        }
                    }
                    else {
                        errorIngresoDatos = true
                        cadenaAux1 = `Has ingresado al estudiante ${estudianteRepetido} mas de una vez`;
                    }
                }
                else {
                    errorIngresoDatos = true
                    cadenaAux1 = "Debe agregarse mínimo un estudiante";
                }
                break;

            case "Metodologia":

                cadenaAux1 = `La metodología del equipo ${llave}`; cadenaAux2 = "definida";
                metodologiasDesarrollo[llave] = crearObjeto(Array.from(input).slice(1, input.length));
                break;

            case "Entrega":

                if (casoMixto.split(" ")[0] == "Informe") {
                    if (nuevoAgrega.length == 0) {
                        errorIngresoDatos = true
                        cadenaAux1 = "Debe agregarse por lo menos una sección";
                        break;
                    }
                }

                var esInforme = false; var objeto;
                switch (casoMixto) {
                    case "Informe Inicial":
                        cadenaAux1 = `El informe inicial del equipo ${llave}`; cadenaAux2 = "entregado";
                        objeto = informesIniciales;
                        esInforme = true;
                        break;

                    case "Informe de Progreso":
                        cadenaAux1 = `El informe de progreso del equipo ${llave}`; cadenaAux2 = "entregado";
                        objeto = informesProgreso;
                        esInforme = true;
                        break;

                    case "Informe Final":
                        cadenaAux1 = `El informe final del equipo ${llave}`; cadenaAux2 = "entregado";
                        objeto = informesFinales;
                        esInforme = true;
                        break;

                    case "Prototipo Alpha":
                        cadenaAux1 = `El prototipo alpha del equipo ${llave}`; cadenaAux2 = "entregado";
                        objeto = prototiposAlpha;
                        break;

                    case "Prototipo Beta":
                        cadenaAux1 = `El prototipo beta del equipo ${llave}`; cadenaAux2 = "entregado";
                        objeto = prototiposBeta;
                        break;
                }

                objeto[llave] = crearObjeto(Array.from(input).slice(1, input.length));

                if (esInforme) {
                    objeto[llave].secciones = crearObjeto(nuevoAgrega);
                    objeto[llave].estado = "No calificado"
                }
                break;

            case "Califica":

                var condicionEspecial = false;
                if (nuevoAgrega.length == 0) {
                    // errorIngresoDatos = true
                    // cadenaAux1 = "Debe agregarse por lo menos un criterio de evaluación";
                    condicionEspecial = true;
                }

                // Separando los elementos relevantes de la tabla de los criterios de evaluación
                var auxCriterios = []; var separaCriterios = 0; var notaRubrica = 0;

                if (!condicionEspecial) {
                    for (let index = 0; index < nuevoAgrega.length - 1; index++) {
                        if (separaCriterios != 1 && separaCriterios != 5) {
                            auxCriterios.push(nuevoAgrega[index]);
                        }
                        if (separaCriterios == 4) {
                            notaRubrica += parseFloat(nuevoAgrega[index].value) * parseFloat(nuevoAgrega[index + 1].innerText) / 100;
                        }
                        if (separaCriterios < 5) {
                            separaCriterios++;
                        } else {
                            separaCriterios = 0;
                        }
                    }
                }

                var objeto;
                switch (casoMixto) {
                    case "Informe Inicial":
                        cadenaAux1 = `El informe inicial del equipo ${llave}`; cadenaAux2 = "calificado";
                        objeto = informesIniciales;
                        break;

                    case "Informe de Progreso":
                        cadenaAux1 = `El informe de progreso del equipo ${llave}`; cadenaAux2 = "calificado";
                        objeto = informesProgreso;
                        break;

                    case "Informe Final":
                        cadenaAux1 = `El informe final del equipo ${llave}`; cadenaAux2 = "calificado";
                        objeto = informesFinales;
                        break;

                    case "Prototipo Alpha":
                        cadenaAux1 = `El prototipo alpha del equipo ${llave}`; cadenaAux2 = "calificado";
                        objeto = prototiposAlpha;
                        break;

                    case "Prototipo Beta":
                        cadenaAux1 = `El prototipo beta del equipo ${llave}`; cadenaAux2 = "calificado";
                        objeto = prototiposBeta;
                        break;
                }

                if (objeto[llave] != undefined) {
                    objeto[llave].rubrica = {}
                    objeto[llave].rubrica.criterios = {}
                    objeto[llave].rubrica.nota = notaRubrica;

                    if (casoMixto.split(" ")[0] == "Informe") {
                        objeto[llave].estado = input[0].value;
                    }
                    else {
                        objeto[llave].calidad = input[0].value;
                    }
                    document.getElementById(input[1].id).value = notaRubrica.toFixed(2);

                    if (!condicionEspecial) {
                        for (let index = 0; index < auxCriterios.length; index += 4) {
                            objeto[llave].rubrica.criterios[auxCriterios[index].innerText] = crearObjeto(auxCriterios.slice(index + 1, index + 4));
                        }
                    }
                }
                else {
                    condicionAlertacion = false;
                }
                break;

            case "Retroalimentacion":
                cadenaAux1 = `La retroalimentación del prototipo alpha del equipo ${llave}`; cadenaAux2 = "realizada"
                retroalimentaciones[llave] = {};

                for (let index = 0; index < input.length; index += 3) {
                    retroalimentaciones[llave]["elemento " + index / 3] = crearObjeto(Array.from(input).slice(index, index + 3));
                }
                break;

            case "Revision":

                cadenaAux1 = `El prototipo beta del equipo ${llave}`; cadenaAux2 = "revisado"
                revisiones[llave] = crearObjeto(input, AgregaConCondicion);
                break;
        }

        if (!errorIngresoDatos) {
            if (!condicionPlural) { cadenaAux3 = "ha sido" }
            if (condicionAlertacion) { alert(`${cadenaAux1} ${cadenaAux3} ${cadenaAux2}`); }
            return true;
        }
        else {
            alert(cadenaAux1)
            return false;
        }
    }
    else {
        alert("Por favor llenar todos los campos")
        return false;
    }
}

function crearObjeto(listiviris, AgregaConCondicion = undefined, arregloCadenaValores = undefined, atributoCadenaValores = undefined) {
    var objeto = {}; var cadena = "";

    if (AgregaConCondicion == undefined) {
        for (let index = 0; index < listiviris.length; index++) {
            if (listiviris[index].type != "radio") {
                objeto[listiviris[index].id] = listiviris[index].value
            }
            else {
                if (listiviris[index].checked) {
                    objeto[listiviris[index].id] = listiviris[index].value
                }
            }
            if (arregloCadenaValores != undefined) {
                if (index < listiviris.length - 2) {
                    cadena += arregloCadenaValores[listiviris[index].value][atributoCadenaValores] + ", ";
                }
                else if (index < listiviris.length - 1) {
                    cadena += arregloCadenaValores[listiviris[index].value][atributoCadenaValores] + " y ";
                } else {
                    cadena += arregloCadenaValores[listiviris[index].value][atributoCadenaValores]
                }
            }
        }
    }
    else {
        var j = 0;
        for (let index = 0; index < listiviris.length; index++) {
            if (AgregaConCondicion[j]) {
                if (listiviris[index].type != "radio") {
                    objeto[listiviris[index].id] = listiviris[index].value
                }
                else {
                    if (listiviris[index].checked) {
                        objeto[listiviris[index].id] = listiviris[index].value
                    }
                }
                if (arregloCadenaValores != undefined) {
                    if (index < listiviris.length - 2) {
                        cadena += arregloCadenaValores[listiviris[index].value][atributoCadenaValores] + ", ";
                    }
                    else if (index < listiviris.length - 1) {
                        cadena += arregloCadenaValores[listiviris[index].value][atributoCadenaValores] + " y ";
                    } else {
                        cadena += arregloCadenaValores[listiviris[index].value][atributoCadenaValores]
                    }
                }
                j++;
            }
            else {
                j++;
            }
        }
    }

    if (arregloCadenaValores == undefined) {
        return objeto;
    }
    else {
        return [objeto, cadena];
    }
}

function adicionarAobjeto(objeto, listiviris) {
    if (NodeList.prototype.isPrototypeOf(listiviris)) {
        for (let index = 0; index < listiviris.length; index++) {
            if (listiviris[index].type != "radio") {
                objeto[listiviris[index].id] = listiviris[index].value;
            }
            else {
                if (listiviris[index].checked) {
                    objeto[listiviris[index].id] = listiviris[index].value;
                }
            }
        }
    }
    else if (Array.isArray(listiviris)) {
        // Pa ponerle la empresa a representante
        for (let index = 0; index < listiviris.length; index++) {
            if (listiviris[index].type != "radio") {
                objeto[listiviris[index][0]] = listiviris[index][1];
            }
            else {
                if (listiviris[index].checked) {
                    objeto[listiviris[index][0]] = listiviris[index][1];
                }
            }
        }
    }
}

function login(input, usuario) {

    var contrasenaSuperSecretaAdministrador = "admin"; var nombreAdministrador = "admin";
    var objeto; var errorIngresoDatos = false;

    switch (usuario) {
        case "Profesor":
            objeto = profesores;
            break;
        case "Estudiante":
            objeto = estudiantes;
            break;
        case "Representante":
            objeto = representantes;
            break;
    }

    if (usuario != "Administrador") {
        if (objeto[input[0].value] != undefined) {
            if (objeto[input[0].value].contrasena == input[1].value) {
                usuarioActivo.datos = objeto[input[0].value];
                usuarioActivo.tipoUsuario = usuario;
            } else {
                errorIngresoDatos = true;
            }
        } else {
            errorIngresoDatos = true;
        }
    } else {
        if (input[0].value == nombreAdministrador && input[1].value == contrasenaSuperSecretaAdministrador) {
            usuarioActivo.datos = { nombre: nombreAdministrador, contrasena: contrasenaSuperSecretaAdministrador };
            usuarioActivo.tipoUsuario = usuario;
        }
        else {
            errorIngresoDatos = true;
        }
    }

    if (!errorIngresoDatos) {
        alert(`Datos correctos, bienvenido ${usuario.toLowerCase()}`);
    }
    else {
        alert(`Los datos ingresados no corresponden a ningun ${usuario.toLowerCase()}`);
    }
}

function controladorRelacionDinamica(tipoUsuarioRelacion) {
    if (usuarioActivo.tipoUsuario == tipoUsuarioRelacion) {
        return true;
    }
    else {
        return false;
    }
}

// Eventos
function eventoProfesorAparece() {
    var ultimoSemestre = semestresCod.semestres[semestresCod.codigoSemestre - 1];
    var fechaInicioUltimoSemestre = ultimoSemestre.fechaInicio.split("-")
    // var fechaInicioUltimoSemestre = "2021-2-20".split("-") // Esto espazer pruebas
    fechaInicioUltimoSemestre = new Date(fechaInicioUltimoSemestre[0], fechaInicioUltimoSemestre[1] - 1, fechaInicioUltimoSemestre[2]);
    var fechaHoy = new Date();
    fechaHoy = new Date(fechaHoy.getFullYear(), fechaHoy.getMonth(), fechaHoy.getDate());
    var tiempo = fechaHoy - fechaInicioUltimoSemestre;

    var probabilidad = (-Math.atan(tiempo) + Math.PI / 2) / Math.PI;
    var numeroBrandon = Math.random();

    // console.log(tiempo, probabilidad, ultimoSemestre.fechaInicio) Esto espa depurar

    if (numeroBrandon <= probabilidad) {
        alert("Si");
    }
    else {
        alert("No");
    }
}

function eventoAsignaturaInicia() {
    var ultimoSemestre = semestresCod.semestres[semestresCod.codigoSemestre - 1];
    var fechaInicioUltimoSemestre = ultimoSemestre.fechaInicio.split("-")
    // var fechaInicioUltimoSemestre = "2021-2-20".split("-") // Esto espazer pruebas
    fechaInicioUltimoSemestre = new Date(fechaInicioUltimoSemestre[0], fechaInicioUltimoSemestre[1] - 1, fechaInicioUltimoSemestre[2]);
    var fechaHoy = new Date();
    fechaHoy = new Date(fechaHoy.getFullYear(), fechaHoy.getMonth(), fechaHoy.getDate());

    if (fechaHoy >= fechaInicioUltimoSemestre) {
        alert("Si");
    }
    else {
        alert("No");
    }
}

function eventoRepresentanteAparece() {
    var probabilidad = 1 / 15;
    var numeroBrandon = Math.random();

    if (numeroBrandon <= probabilidad) {
        alert("Si");
    }
    else {
        alert("No");
    }
}

function eventoProyectoFinaliza() {
    var ultimoSemestre = semestresCod.semestres[semestresCod.codigoSemestre - 1];
    var fechaFinUltimoSemestre = ultimoSemestre.fechaInicio.split("-")
    fechaFinUltimoSemestre = new Date(fechaFinUltimoSemestre[0], fechaFinUltimoSemestre[1] - 1, fechaFinUltimoSemestre[2]);
    var fechaHoy = new Date();
    fechaHoy = new Date(fechaHoy.getFullYear(), fechaHoy.getMonth(), fechaHoy.getDate());
    // var fechaFin = new Date(2020, 11, 28);

    if (fechaHoy >= fechaFinUltimoSemestre) {
        alert("Si");
    }
    else {
        alert("No");
    }
}

function eventoCondicional() {
    for (let [key, value] of Object.entries(problemas)) {
        if (value.validacion != undefined) {
            if (value.validacion == "Aprobado Sin Ajustes" || value.validacion == "Aprobado Con Ajustes") {
                alert("Si"); return;
            }
        }
    }
    alert("No")
}

// Formularios factores criticos de exito
function formularioPromoverCompetencia(input) {
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Porcentaje de prototipos beta y prototipos alpha con calidad alta </h1>"

    // <label for="formula"> ((Número de prototipos beta con calidad alta + Número de prototipos alpha con calidad alta) / (Número de prototipos beta + Número de prototipos alpha))*100 </label>
    document.getElementById("Form1").innerHTML = `
        <div id="datosPromoverCompetencia" class="camposLogros">
            <img class="iconosPrincipales" src="Ecuaciones/Promover Competencia.png" id="imagen">
            <input type="text" id="formula" disabled>
        </div>

        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;
    document.getElementById("imagen").style.width = "190px";
    document.getElementById("datosPromoverCompetencia").style.gridTemplateColumns = "200px 160px";

    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };

    let alphaHQ = contarElementos(prototiposAlpha, "calidad", "Alta");
    let numalpha = Object.keys(prototiposAlpha).length;
    let betaHQ = contarElementos(prototiposBeta, "calidad", "Alta");
    let numbeta = Object.keys(prototiposBeta).length;

    if (!denominadorEsCero([numalpha + numbeta])) {
        document.getElementById("formula").value = ((alphaHQ + betaHQ) / (numalpha + numbeta) * 100).toFixed(2) + " %";
    } else {
        document.getElementById("formula").value = 0;
    }
}

function formularioDesarrollarProyecto(input) {
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Porcentaje de proyectos con calidad alta </h1>"

    // <label for="formula"> (Número de proyectos con calidad alta / Número de proyectos)*100 </label>
    document.getElementById("Form1").innerHTML = `
        <div id="datosPromoverCompetencia" class="camposLogros">
            <img class="iconosPrincipales" src="Ecuaciones/Desarrollar Proyecto.png" id="imagen">
            <input type="text" id="formula" disabled>
        </div>

        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;
    document.getElementById("imagen").style.width = "120px";
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };

    let proyectosHQ = contarElementos(equipos, "calidad", "alta");
    let numProy = carteraDeProyectos.cantidadProyectos;

    if (!denominadorEsCero([numProy])) {
        document.getElementById("formula").value = proyectosHQ / numProy * 100 + " %";
    } else {
        document.getElementById("formula").value = 0;
    }
}

function formularioFomentarParticipacion(input) {
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Promedio de las notas de los estudiantes </h1>"

    // <label for="formula"> Nota de informes y prototipos entregados / Número de informes y prototipos entregados </label>
    document.getElementById("Form1").innerHTML = `
        <div id="datosPromoverCompetencia" class="camposLogros">
            <img class="iconosPrincipales" src="Ecuaciones/Fomentar Participación.png" id="imagen">
            <input type="text" id="formula" disabled>
        </div>

        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;
    document.getElementById("imagen").style.width = "120px";
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };

    let nota = 0; let numero = 0;
    for (var value of Object.values(informesIniciales)) {
        if (value.rubrica != undefined) {
            numero++;
            nota += value.rubrica.nota;
        }
    }
    for (var value of Object.values(informesProgreso)) {
        if (value.rubrica != undefined) {
            numero++;
            nota += value.rubrica.nota;
        }
    }
    for (var value of Object.values(informesFinales)) {
        if (value.rubrica != undefined) {
            numero++;
            nota += value.rubrica.nota;
        }
    }
    for (var value of Object.values(prototiposAlpha)) {
        if (value.rubrica != undefined) {
            numero++;
            nota += value.rubrica.nota;
        }
    }
    for (var value of Object.values(prototiposBeta)) {
        if (value.rubrica != undefined) {
            numero++;
            nota += value.rubrica.nota;
        }
    }

    if (!denominadorEsCero([numero])) {
        document.getElementById("formula").value = (nota / numero).toFixed(2);
    } else {
        document.getElementById("formula").value = 0;
    }
}

function formularioReconocerProgreso(input) {
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Porcentaje de entrega de informes y prototipos </h1>"
    // <label for="formula"> (Número de informes y prototipos entregados/ Número total de informes y prototipos) * 100 </label>
    document.getElementById("Form1").innerHTML = `
        <div id="datosPromoverCompetencia" class="camposLogros">
            <img class="iconosPrincipales" src="Ecuaciones/Reconocer Progreso.png" id="imagen">
            <input type="text" id="formula" disabled>
        </div>

        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;
    document.getElementById("imagen").style.width = "120px";
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };

    let totalTrabajos = Object.keys(equipos).length * 5 // El total de equipos multiplicado por la cantidad de entregables mijins
    let numTrabajosEntregados = Object.keys(informesIniciales).length + Object.keys(informesProgreso).length +
        Object.keys(informesFinales).length + Object.keys(prototiposAlpha).length + Object.keys(prototiposBeta).length;

    if (!denominadorEsCero([totalTrabajos])) {
        document.getElementById("formula").value = (numTrabajosEntregados / totalTrabajos * 100).toFixed(2) + " %";
    } else {
        document.getElementById("formula").value = 0;
    }
}

function formularioReconocerCausa(input) {
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Porcentaje de problemas trabajados </h1>"
    // <label for="formula"> (Número de equipos conformados / Número de problemas validados) * 100 </label>
    document.getElementById("Form1").innerHTML = `
        <div id="datosPromoverCompetencia" class="camposLogros">
            <img class="iconosPrincipales" src="Ecuaciones/Reconocer Causa.png" id="imagen">
            <input type="text" id="formula" disabled>
        </div>

        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;
    document.getElementById("imagen").style.width = "120px";
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };

    let equiposConformados = Object.keys(equipos).length
    let problemasValidados = contarElementos(problemas, "validacion", "Aprobado Sin Ajustes");
    problemasValidados += contarElementos(problemas, "validacion", "Aprobado Con Ajustes");

    if (!denominadorEsCero([problemasValidados])) {
        document.getElementById("formula").value = (equiposConformados / problemasValidados * 100).toFixed(2) + " %";
    } else {
        document.getElementById("formula").value = 0;
    }
}

function formularioGarantizarEquipoProyecto(input) {
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Porcentaje de problemas validados </h1>"
    // <label for="formula"> (Número de problemas validados/ Número de empresas registradas) * 100 </label>
    document.getElementById("Form1").innerHTML = `
        <div id="datosPromoverCompetencia" class="camposLogros">
            <img class="iconosPrincipales" src="Ecuaciones/Garantizar Equipo Tiene Proyecto.png" id="imagen">
            <input type="text" id="formula" disabled>
        </div>

        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;
    document.getElementById("imagen").style.width = "120px";
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };

    let empresasRegistradas = Object.keys(empresas).length
    let problemasValidados = contarElementos(problemas, "validacion", "Aprobado Sin Ajustes");
    problemasValidados += contarElementos(problemas, "validacion", "Aprobado Con Ajustes");

    if (!denominadorEsCero([empresasRegistradas])) {
        document.getElementById("formula").value = (problemasValidados / empresasRegistradas * 100).toFixed(2) + " %";
    } else {
        document.getElementById("formula").value = 0;
    }
}

function formularioGarantizarEquipoEstudiante(input) {
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Proporción de estudiantes por equipo </h1>"
    // <label for="formula"> Número de estudiantes / Número de equipos conformados </label>
    document.getElementById("Form1").innerHTML = `
        <div id="datosPromoverCompetencia" class="camposLogros">
            <img class="iconosPrincipales" src="Ecuaciones/Garantizar Equipo Tiene Estudiante.png" id="imagen">
            <input type="text" id="formula" disabled>
        </div>

        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;
    var divform = document.getElementById("divForm1");
    document.getElementById("imagen").style.width = "120px";
    mostracionFormulario(input, divform)
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };

    let numeroEstudiantes = 0;
    let numeroEquipos = Object.keys(equipos).length;

    for (var entri of Object.values(equipos)) {
        numeroEstudiantes += Object.keys(entri.integrantes).length;
    }

    if (!denominadorEsCero([numeroEquipos])) {
        document.getElementById("formula").value = (numeroEstudiantes / numeroEquipos).toFixed(2);
    } else {
        document.getElementById("formula").value = 0;
    }
}

function formularioIncrementarCartera(input) {
    document.getElementById("barraForm1").innerHTML = "<h1 class='tituloForm'> Proporción de equipos por proyecto </h1>"
    // <label for="formula"> Número de equipos conformados / Número de proyectos en la cartera de proyectos </label>
    document.getElementById("Form1").innerHTML = `
        <div id="datosPromoverCompetencia" class="camposLogros">
            <img class="iconosPrincipales" src="Ecuaciones/Incrementar Cartera de Proyecto.png" id="imagen">
            <input type="text" id="formula" disabled>
        </div>

        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;
    document.getElementById("imagen").style.width = "120px";
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)
    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };

    let numeroEquipos = Object.keys(equipos).length;
    let numeroProyectos = carteraDeProyectos.cantidadProyectos;

    if (!denominadorEsCero([numeroProyectos])) {
        document.getElementById("formula").value = (numeroEquipos / numeroProyectos).toFixed(2);
    } else {
        document.getElementById("formula").value = 0;
    }
}

function contarElementos(objeto, atributo, valor) {
    var contador = 0;

    for (var value of Object.values(objeto)) {
        // Se comprueba si tiene el atributo
        if (value[atributo] != undefined) {
            if (value[atributo] == valor) {
                contador++;
            }
        }
    }
    return contador;
}

function denominadorEsCero(lista) {
    return lista.forEach(
        (elemento) => elemento == 0
    );
}

function formularioVerEspecificacion(input, nombreImagen, carpeta, dimension = "400px") {

    // Evitando que funcione el click derecho
    input.preventDefault();

    document.getElementById("barraForm1").innerHTML = ""
    // <label for="formula"> Número de equipos conformados / Número de proyectos en la cartera de proyectos </label>
    document.getElementById("Form1").innerHTML = `
        <div>
            <img src="Especificaciones/${carpeta}/${nombreImagen}.jpg" id="imagen">
        </div>

        <button id="cerrarForm1" type="button" class="botonCerrar"> Cerrar </button>
    `;
    var divform = document.getElementById("divForm1");
    mostracionFormulario(input, divform)

    document.getElementById("cerrarForm1").onclick = () => { divform.style.display = "none" };

    document.getElementById("imagen").style.width = dimension;
}

function guardarDatosLocal() {
    localStorage.setItem("profesores", JSON.stringify(profesores));
    localStorage.setItem("semestresCod", JSON.stringify(semestresCod));
    localStorage.setItem("asignaturas", JSON.stringify(asignaturas));
    localStorage.setItem("clases", JSON.stringify(clases));
    localStorage.setItem("criteriosInicial", JSON.stringify(criteriosInicial));
    localStorage.setItem("criteriosProgreso", JSON.stringify(criteriosProgreso));
    localStorage.setItem("criteriosFinal", JSON.stringify(criteriosFinal));
    localStorage.setItem("criteriosAlpha", JSON.stringify(criteriosAlpha));
    localStorage.setItem("criteriosBeta", JSON.stringify(criteriosBeta));
    localStorage.setItem("empresas", JSON.stringify(empresas));
    localStorage.setItem("representantes", JSON.stringify(representantes));
    localStorage.setItem("problemas", JSON.stringify(problemas));
    localStorage.setItem("carteraDeProyectos", JSON.stringify(carteraDeProyectos));
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
    localStorage.setItem("equipos", JSON.stringify(equipos));
    localStorage.setItem("metodologiasDesarrollo", JSON.stringify(metodologiasDesarrollo));
    localStorage.setItem("informesIniciales", JSON.stringify(informesIniciales));
    localStorage.setItem("informesProgreso", JSON.stringify(informesProgreso));
    localStorage.setItem("informesFinales", JSON.stringify(informesFinales));
    localStorage.setItem("prototiposAlpha", JSON.stringify(prototiposAlpha));
    localStorage.setItem("prototiposBeta", JSON.stringify(prototiposBeta));
    localStorage.setItem("retroalimentaciones", JSON.stringify(retroalimentaciones));
    localStorage.setItem("revisiones", JSON.stringify(revisiones));
}

function controladorDatosLocal() {
    profesores = cargarDatosLocal("profesores");
    semestresCod = cargarDatosLocal("semestresCod", true);
    asignaturas = cargarDatosLocal("asignaturas");
    clases = cargarDatosLocal("clases");
    criteriosInicial = cargarDatosLocal("criteriosInicial");
    criteriosProgreso = cargarDatosLocal("criteriosProgreso");
    criteriosFinal = cargarDatosLocal("criteriosFinal");
    criteriosAlpha = cargarDatosLocal("criteriosAlpha");
    criteriosBeta = cargarDatosLocal("criteriosBeta");
    empresas = cargarDatosLocal("empresas");
    representantes = cargarDatosLocal("representantes");
    problemas = cargarDatosLocal("problemas");
    carteraDeProyectos = cargarDatosLocal("carteraDeProyectos", false, true);
    estudiantes = cargarDatosLocal("estudiantes");
    equipos = cargarDatosLocal("equipos");
    metodologiasDesarrollo = cargarDatosLocal("metodologiasDesarrollo");
    informesIniciales = cargarDatosLocal("informesIniciales");
    informesProgreso = cargarDatosLocal("informesProgreso");
    informesFinales = cargarDatosLocal("informesFinales");
    prototiposAlpha = cargarDatosLocal("prototiposAlpha");
    prototiposBeta = cargarDatosLocal("prototiposBeta");
    retroalimentaciones = cargarDatosLocal("retroalimentaciones");
    revisiones = cargarDatosLocal("revisiones");
}

function vaciarObjetos(){
    
    profesores = null;
    semestresCod = null;
    asignaturas = null;
    clases = null;
    criteriosInicial = null;
    criteriosProgreso = null;
    criteriosFinal = null;
    criteriosAlpha = null;
    criteriosBeta = null;
    empresas = null;
    representantes = null;
    problemas = null;
    carteraDeProyectos = null;
    estudiantes = null;
    equipos = null;
    metodologiasDesarrollo = null;
    informesIniciales = null;
    informesProgreso = null;
    informesFinales = null;
    prototiposAlpha = null;
    prototiposBeta = null;
    retroalimentaciones = null;
    revisiones = null;
}

function cargarDatosLocal(nombreObjeto, esSemestreCod = false, esCartera = false) {

    var objeto = localStorage.getItem(nombreObjeto);

    if (objeto == "undefined" || objeto == null || objeto == "null") {
        if (esSemestreCod) {
            objeto = {
                codigoSemestre: 0,
                semestres: {}
            };
        }
        else if (esCartera) {
            objeto = {
                cantidadProyectos: 0,
                proyectos: {}
            };
        }
        else {
            objeto = {};
        }
    } else {
        var objeto = JSON.parse(objeto);
    }
    return objeto;
}

var profesores
var semestresCod
var asignaturas
var clases
var criteriosInicial
var criteriosProgreso
var criteriosFinal
var criteriosAlpha
var criteriosBeta
var empresas
var representantes
var problemas
var carteraDeProyectos
var estudiantes
var equipos
var metodologiasDesarrollo
var informesIniciales
var informesProgreso
var informesFinales
var prototiposAlpha
var prototiposBeta
var retroalimentaciones
var revisiones

// Valores para sesión
var usuarioActivo = {
    datos: {
    },
    tipoUsuario: ""
};

window.addEventListener("load", inicializarPagina, false)
window.addEventListener("beforeunload", guardarDatosLocal, false)