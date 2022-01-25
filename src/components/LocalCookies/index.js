import  CompleteRegistration from "../../pages/CompleteRegistration/index"

export function Cookies() {

  
    function storageData (e){
      localStorage.setItem('date', document.getElementById('date').value);
      localStorage.setItem('cpf', document.getElementById('cpf').value);
      localStorage.setItem('cep', document.getElementById('cep').value);
      localStorage.setItem('endereço', document.getElementById('endereço').value);
      localStorage.setItem('numero', document.getElementById('numero').value);
      localStorage.setItem('bairro', document.getElementById('bairro').value);
      localStorage.setItem('cidade', document.getElementById('cidade').value);
      localStorage.setItem('estado', document.getElementById('estado').value);
  
      document.cookie = `name=${document.getElementById('name').value}`;
      document.cookie = `date=${document.getElementById('date').value}}`;
      document.cookie = `cpf=${document.getElementById('cpf').value}}`;
      document.cookie = `cep=${document.getElementById('cep').value}}`;
      document.cookie = `endereço=${document.getElementById('endereço').value}}`;
      document.cookie = `numero=${document.getElementById('numero').value}}`;
      document.cookie = `bairro=${document.getElementById('bairro').value}}`;
      document.cookie = `cidade=${document.getElementById('cidade').value}}`;
      document.cookie = `estado=${document.getElementById('estado').value}}`;
    } 
  
    function checkCookie(){
      console.log(document.cookie)
    }
    checkCookie()
  
    function checkStorage(){
      console.log(localStorage.getItem('cpf'))
    }
    checkStorage()
  
    return (
     <CompleteRegistration/>
    );
  };
  
  