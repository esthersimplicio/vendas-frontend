function confirmDelete() {
    if (confirm('Tem certeza de que deseja excluir sua conta? Esta ação é irreversível.')) {
        // Crie uma solicitação DELETE usando JavaScript
        var xhr = new XMLHttpRequest();
        xhr.open('DELETE', '/deletar_usuario', true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // A exclusão foi bem-sucedida, você pode redirecionar o usuário ou realizar outras ações necessárias.
                alert('Conta excluída com sucesso.');
                window.location.href = '/signin'; // Redireciona o usuário após a exclusão.
            }
        };

        xhr.send();
    }
}