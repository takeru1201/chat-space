$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
       `<div class="chat-main__message-list--messages">
          <div class="chat-main__message-list--messages__name">
            ${message.user_name}
          </div>
          <div class="chat-main__message-list--messages__date">
            ${message.created_at}
          </div>
        </div>
        <div class="chat-main__message-list--messages__text">
          <p class="chat-main__message-list--messages__text__content">
            ${message.content}
          </p>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
        `<div class="chat-main__message-list--messages">
           <div class="chat-main__message-list--messages__name">
             ${message.user_name}
           </div>
           <div class="chat-main__message-list--messages__date">
             ${message.created_at}
           </div>
          </div>
          <div class="chat-main__message-list--messages__text">
            <p class="chat-main__message-list--messages__text__content">
              ${message.content}
            </p>
          </div>`
      return html;
    };
  }

$('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__message-list').append(html);
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      $('form')[0].reset();
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
    .always(function(data){
      $('.submit-btn').prop('disabled', false);
    });
  })
});



