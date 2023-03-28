import React, { FormEvent, useCallback, useRef } from 'react';
import './App.css';
import Input from './components/Input';
import Modal, {ModalHandles} from './components/Modal';

function App() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const acceptTermsRef = useRef({value: false});

  const modalRef = useRef<ModalHandles>(null);
  
  //não faz renderizações desnecessárias 
  //se fosse usar o useState é uma renderização para cada letra digitada no input
  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    console.log(nameInputRef.current?.value);
    console.log(acceptTermsRef.current.value);
  }, [])

  const handleAcceptTerms = useCallback((e: FormEvent) => {
    acceptTermsRef.current.value =  !acceptTermsRef.current.value;
  }, [])

  const handleOpenModal = useCallback((e: FormEvent) => {
    modalRef.current?.openModal();
  }, [])


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Input 
          name="name" 
          label="Nome completo"
          inputRef={nameInputRef}
        /> 
        <button type='button' onClick={handleAcceptTerms}>Aceitar termos</button>
        <button type='submit'>Enviar</button>
      </form>   

      <button onClick={handleOpenModal}>Abrir modal</button> 
      <Modal ref={modalRef}/>
    </div>
  );
}

export default App;
