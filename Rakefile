GH_PAGES_DIR = "sn3akiwhizper.github.io"

desc "Build Jekyll site and copy files"
task :build do
  puts ">Building website"
  system "jekyll build --incremental --config _config.yml,_config.prod.yml"
  puts ">Deleting old files"
  system "rm -r ../#{GH_PAGES_DIR}/*" unless Dir['../#{GH_PAGES_DIR}/*'].empty?
  puts ">Copying fresh pages"
  system "cp -r _site/* ../#{GH_PAGES_DIR}/"
end
