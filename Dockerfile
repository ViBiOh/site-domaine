FROM vibioh/viws:light

ENV VIWS_CSP "default-src 'self'; base-uri 'self'; script-src 'self' 'unsafe-inline' api.tiles.mapbox.com; style-src 'self' 'unsafe-inline' cdn.jsdelivr.net/npm/normalize.css@8.0.0/ use.fontawesome.com/releases/v5.2.0/css/ fonts.googleapis.com https://api.tiles.mapbox.com; img-src 'self' data: blob: ; font-src 'self' fonts.gstatic.com use.fontawesome.com; connect-src 'self' https://*.mapbox.com; child-src blob:; worker-src blob:"
ENV VIWS_HEADERS "X-UA-Compatible:ie=edge~content-language:fr"

ARG VERSION
ENV VERSION=${VERSION}

COPY dist/ /www/
