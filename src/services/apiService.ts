
// apiService.ts

export interface Parceria {
    id: number;
    img: string;
    data_criacao: string;
  }
  

export const getParcerias = async (): Promise<Parceria[]> => {
  const response = await fetch('http://38.242.217.81:5000/api/parcerias', {
    method: 'GET',
    headers: {
      'API_KEY': 'mtevolutionKey',
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`API Error: ${error.error}`);
  }

  return response.json();
};




export const getProdutos = async () => {
    const url = 'http://38.242.217.81:5000/api/produtos';
    const headers = {
      'Content-Type': 'application/json',
    };
  
    try {
      const response = await fetch(url, { headers });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error(`Erro ao obter produtos. Status code: ${response.status}`);
        const error = await response.json();
        console.error('Mensagem de erro:', error);
        return [];
      }
    } catch (error) {
      console.error('Ocorreu um erro ao fazer a solicitação:', error);
      return [];
    }
  };
  


  // services/apiService.js

export const getServicos = async () => {
    const url = 'http://38.242.217.81:5000/api/servicos';
    const headers = {
      'Content-Type': 'application/json',
    };
  
    try {
      const response = await fetch(url, { headers });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error(`Erro ao obter serviços. Status code: ${response.status}`);
        const error = await response.json();
        console.error('Mensagem de erro:', error);
        return [];
      }
    } catch (error) {
      console.error('Ocorreu um erro ao fazer a solicitação:', error);
      return [];
    }
  };
  


  export const getProdutoPorId = async (id) => {
    const url = `http://38.242.217.81:5000/api/produto/titulo/${id}`;
    const headers = {
      'Content-Type': 'application/json',
    };
  
    try {
      const response = await fetch(url, { headers });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error(`Erro ao obter produto com ID ${id}. Status code: ${response.status}`);
        const error = await response.json();
        console.error('Mensagem de erro:', error);
        return null;
      }
    } catch (error) {
      console.error('Ocorreu um erro ao fazer a solicitação:', error);
      return null;
    }
  };
  
 


  export const getServicoPorTitulo = async (titulo: string) => {
    const url = `http://38.242.217.81:5000/api/servicos/titulo/${titulo}`;
    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        const response = await fetch(url, { headers });

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error(`Erro ao obter o serviço. Status code: ${response.status}`);
            const error = await response.json();
            console.error('Mensagem de erro:', error);
            return null;
        }
    } catch (error) {
        console.error('Ocorreu um erro ao fazer a solicitação:', error);
        return null;
    }
};
