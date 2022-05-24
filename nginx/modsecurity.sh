#!/bin/bash

cd /opt
git clone https://github.com/SpiderLabs/ModSecurity.git
cd ModSecurity/
git submodule init
git submodule update

./build.sh
./configure
make
make install

cd /opt/
git clone https://github.com/SpiderLabs/ModSecurity-nginx.git

NGINX_VERSION="nginx-"`nginx -v 2>&1 | cut -d "/" -f 2 | cut -d " " -f 1`
NGINX_VERSION_TAR_GZ="nginx-"`nginx -v 2>&1 | cut -d "/" -f 2 | cut -d " " -f 1`".tar.gz"

wget http://nginx.org/download/$NGINX_VERSION_TAR_GZ 
tar -xzvf $NGINX_VERSION_TAR_GZ

cd $NGINX_VERSION
#NGINX_CONF_ARG=`nginx -V 2>&1 | awk -F "configure arguments:" '{print $2}' | tr -d "\n"`" #--add-dynamic-module=../ModSecurity-nginx"
#echo $NGINX_CONF_ARG | ./configure 
./configure --with-compat --add-dynamic-module=../ModSecurity-nginx
make modules
mkdir /etc/nginx/modules
cp objs/ngx_http_modsecurity_module.so /etc/nginx/modules

# Pull core rules setup of OSWAP
cd /opt
git clone https://github.com/coreruleset/coreruleset modsecurity-crs
cd modsecurity-crs/
mv crs-setup.conf.example crs-setup.conf
mv rules/REQUEST-900-EXCLUSION-RULES-BEFORE-CRS.conf.example rules/REQUEST-900-EXCLUSION-RULES-BEFORE-CRS.conf

cd /opt
mv modsecurity-crs /usr/local/
mkdir -p /etc/nginx/modsec
cp ModSecurity/unicode.mapping /etc/nginx/modsec
cp ModSecurity/modsecurity.conf-recommended /etc/nginx/modsec

cd /etc/nginx/modsec
sed 's/DetectionOnly/On/' modsecurity.conf-recommended > modsecurity.conf

echo "Include /etc/nginx/modsec/modsecurity.conf       
Include /usr/local/modsecurity-crs/crs-setup.conf
Include /usr/local/modsecurity-crs/rules/*.conf
" > main.conf