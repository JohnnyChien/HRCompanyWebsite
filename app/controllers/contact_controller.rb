class ContactController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
  end

  def email
    puts params.inspect
    ActionMailer::Base.mail(
      :from => "luckycountry456@gmail.com", 
      :to => "emailjchien@gmail.com", 
      :subject => "I would like to learn more", 
      :body => params[:message], :name => params[:name], 
      :email => params[:email]).deliver
    render :nothing => true, :status => 200, :content_type => 'text/html'
  end
end
