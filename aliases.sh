alias board-build="docker-compose build server client"
alias board-lcl="board-build && docker-compose up server client"
alias board-lcl-server-bash="docker-compose exec server bash"
alias board-lcl-client-bash="docker-compose exec client bash"