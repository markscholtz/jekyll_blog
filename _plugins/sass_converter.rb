# Based on https://gist.github.com/960150

module Jekyll
  class SassConverter < Converter
    safe true

    def setup
      return if @setup
      require 'sass'
      @setup = true
    rescue
      STDERR.puts 'do `gem install sass`'
      raise FatalException.new("Missing dependency: sass")
    end

     def matches(ext)
      ext =~ /scss/i
    end

    def output_ext(ext)
      ".css"
    end

    def convert(content)
      setup
      begin
        puts "Performing Sass Conversion."
        engine = Sass::Engine.new(content, :syntax => :scss)
        engine.render
      rescue StandardError => e
        puts "!!! Sass Error: " + e.message
      end
    end

  end
end
