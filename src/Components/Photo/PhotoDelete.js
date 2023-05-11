import React from 'react';
import styles from './PhotoDelete.module.css';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_DELETE } from '../../api';

const PhotoDelete = ({ id }) => {
  const { request, loading } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar a foto?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { r } = await request(url, options);
      if (r.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={styles.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
