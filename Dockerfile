FROM node:latest
COPY index.js /data/
CMD ["/data/index.js"]