# Selecciona la imagen base de Node.js y establece la versión
FROM node:16

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el contenido de la aplicación
COPY . .

# Compila TypeScript
RUN npm run build

# Expone el puerto 3000
EXPOSE 3000

# Inicia la aplicación
CMD ["npm", "start"]
