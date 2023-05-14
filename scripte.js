document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = event.target;
    var data = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      age: form.elements.age.value,
      gender: form.elements.gender.value
    };
    fetch('/persons', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(function(response) {
      if (response.ok) {
        window.location.reload();
        alert('person Added!')
      } else {
        alert('Error adding person');
      }
    });
  });                                                                                                                                                                                                                                                                                   document.getElementById('update-person-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var form = event.target;
        var id = form.elements.id.value;
        var data = {
          name: form.elements.name.value,
          email: form.elements.email.value,
          age: form.elements.age.value,
          gender: form.elements.gender.value
        };
        fetch('/persons/' + id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(function(response) {
          if (response.ok) {
            window.location.reload();
            alert(' person is Updated!')
          } else {
            alert('Error updating person');
          }
        });
      });                                                                                                                                                                                                                                                                                                                                                                                  document.getElementById('delete-person-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var form = event.target;
        var id = form.elements.id.value;
        fetch('/persons/' + id, {
          method: 'DELETE'
        })
        .then(function(response) {
          if (response.ok) {
            window.location.reload();
            alert(' person is Deleted!')
          } else {
            alert('Error deleting person');
          }
        });
      });