class ReservationRoom < ApplicationRecord
  belongs_to :reservation
  belongs_to :room
end
