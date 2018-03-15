200.times do
  name = Faker::Cat.name
  breed = Faker::Cat.breed
  registry = Faker::Cat.registry
  avatar = Faker::Avatar.image(name, '50x50', 'png', 'set4' )
  Cat.create(name: name, breed: breed, registry: registry, avatar: avatar)
end
