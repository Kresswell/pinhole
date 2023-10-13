FROM fusuf/whatsasena:latest

RUN git clone https://github.com/terror-boy/WhiteDevil /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/ 
ENV TZ=Africa/Nairobi
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/Kresswell/pinhole

CMD ["node", "bot.js"]
