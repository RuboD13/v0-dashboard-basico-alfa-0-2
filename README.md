# RentAFlow - Admin Dashboard (Torre de Control)

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/rubodie-1011s-projects/v0-dashboard-basico-alfa-0-1)

## Descripción del Proyecto

Este repositorio contiene la **Torre de Control interna para el equipo de RentAFlow**. Es un dashboard administrativo centralizado diseñado para monitorizar, gestionar y optimizar todas las operaciones de la plataforma B2B SaaS de automatización inmobiliaria.

El sistema está construido con Next.js, React y Tailwind CSS (con una temática visual militar/táctica), y sirve como el centro de mando para que los fundadores y operadores internos de RentAFlow tengan visibilidad en tiempo real sobre la salud del negocio y de las agencias inmobiliarias clientes.

## Funcionalidades Principales

El dashboard está dividido en varias áreas estratégicas:

- **Overview (CEO):** Visión global de ingresos (MRR), salud del sistema, adopción de agencias y funnel de conversión.
- **Live Ops:** Monitorización en tiempo real de eventos, procesamiento de documentos OCR, workflows de firma y llamadas del asistente de voz IA.
- **Salud de Cuentas:** Gestión de agencias, análisis de riesgo de churn (Ficha de Salud), adopción de características clave y oportunidades de upgrade.
- **Operación y Funnel:** Análisis detallado del embudo de conversión (Lead → Visita → Solicitud → Scoring → Firma) y cuellos de botella operativos.
- **Riesgo y Abuso:** Control de compliance, detección de fraude documental, monitoreo de rate limits y salud financiera de los inquilinos.
- **Producto e IA:** Métricas de rendimiento de la Inteligencia Artificial (precisión de extracción OCR, falsos positivos) y estabilidad de integraciones (APIs).
- **Finanzas:** Desglose económico detallado, CAC, LTV, expansión de ingresos (NRR) y cashflow.

## Para el equipo de RentAFlow

Este panel **no es para clientes finales**. Es una herramienta de uso exclusivo interno para tomar decisiones basadas en datos reales de operación. Permite identificar proactivamente qué agencias necesitan soporte (riesgo de churn), cuáles están listas para un upgrade (expansión), y dónde están fallando nuestros sistemas de automatización.

---

### Desarrollo Local

Para correr este proyecto en local:

```bash
npm install
npm run dev
```

El servidor estará disponible en `http://localhost:3000`.