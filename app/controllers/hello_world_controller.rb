# frozen_string_literal: true

class HelloWorldController < ApplicationController
  # layout "hello_world"

  def index
    @greet = Greeting.order('RANDOM()').first
    render :json => @greet.text
  end
end
