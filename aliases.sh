alias board-init=" \
    git submodule update --init && \
    cp mb-deploy/.env.development . && \
    cp mb-deploy/.env.production .
"

alias board-build="docker-compose build"
alias board-lcl-client="board-build client && docker-compose up client"
alias board-lcl-server="board-build server && docker-compose up server"
alias board-lcl-server-bash="docker-compose exec server bash"
alias board-lcl-client-bash="docker-compose exec client bash"
alias board-lcl-server-logs="docker logs -f prototype-server --tail 100"

alias board-prd-build="docker-compose build server-prd"
alias board-prd="board-prd-build && docker-compose up server-prd"
alias board-prd-push="\
    docker tag prototype-server_prd codejunkie21/prototype-server_prd:latest && \
    docker push codejunkie21/prototype-server_prd:latest
"
alias board-prd-deploy="board-prd-build && board-prd-push"
# function board-build() {
#     git fetch origin master
#     ORIGIN_MASTER=$(git show-ref origin/master -s)
#     CURRENT=$(git rev-parse HEAD)
#     if [[ "$ORIGIN_MASTER" != "$CURRENT" ]]; then
#         echo 'origin/master と一致していないのでビルドできません';

#         # return error
#         return 1
#     else
#         echo 'git diff をチェックしてビルドします。コミットされてなければビルドできません';
#         git diff --exit-code && \
#         git diff --staged --exit-code && \
#         docker-compose build php-fpm prd
#     fi
# }