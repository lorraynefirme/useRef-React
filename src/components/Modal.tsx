import React, { useCallback, useState , useImperativeHandle } from 'react'

export interface ModalHandles{
    openModal: () => void;
}

const Modal = React.forwardRef<ModalHandles>((props, ref) =>{
  const [visivle, setVisible] = useState<boolean>(true);

  const openModal = useCallback(()=>{
    setVisible(true);
  }, [])

  useImperativeHandle(ref, () => {
    return {
        openModal
    };
  });


  const handleCloseModal = useCallback(()=>{
    setVisible(false);
  }, [])

  if(!visivle){
    return null;
  }

  return (
    <div>
        Modal aberto
        <button onClick={handleCloseModal}>Fechar modal</button>
    </div>
  )
})

export default Modal;

