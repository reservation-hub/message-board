alias board-init=" \
    touch .env \
    && echo '.envに環境変数を設定してください'
"

alias board-build="docker-compose build server client"
alias board-lcl-client="board-build && docker-compose up client"
alias board-lcl-server="board-build && docker-compose up server"
alias board-lcl-server-bash="docker-compose exec server bash"
alias board-lcl-client-bash="docker-compose exec client bash"
alias board-lcl-server-logs="docker logs -f prototype-server --tail 100"